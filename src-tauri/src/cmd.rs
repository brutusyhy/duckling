use std::sync::Mutex;

use serde::Deserialize;
use serde::Serialize;
use tauri::State;
use tauri::Window;

use crate::api;
use crate::api::ArrowResponse;
use crate::dialect::clickhouse::ClickhouseDialect;
use crate::dialect::duckdb::DuckDbDialect;
use crate::dialect::file::FileDialect;
use crate::dialect::folder::FolderDialect;
use crate::dialect::mysql::MySqlDialect;
use crate::dialect::postgres::PostgresDialect;
use crate::dialect::sqlite::SqliteDialect;
use crate::dialect::{Dialect, TreeNode};

pub struct OpenedUrls(pub Mutex<Option<Vec<url::Url>>>);

#[derive(Debug, Default, Clone, Serialize, Deserialize)]
pub struct DialectPayload {
  pub dialect: String,
  pub path: Option<String>,
  pub username: Option<String>,
  pub password: Option<String>,
  pub host: Option<String>,
  pub port: Option<String>,
  pub database: Option<String>,
  pub cwd: Option<String>,
}

pub async fn get_dialect(
  DialectPayload {
    dialect,
    path,
    username,
    password,
    database,
    host,
    port,
    cwd,
  }: DialectPayload,
) -> Option<Box<dyn Dialect>> {
  match dialect.as_str() {
    "folder" => Some(Box::new(FolderDialect {
      path: path.unwrap(),
      cwd,
    })),
    "file" => Some(Box::new(FileDialect {
      path: path.unwrap(),
    })),
    "duckdb" => Some(Box::new(DuckDbDialect {
      path: path.unwrap(),
      cwd,
    })),
    "sqlite" => Some(Box::new(SqliteDialect {
      path: path.unwrap(),
    })),
    "clickhouse" => Some(Box::new(ClickhouseDialect {
      host: host.unwrap(),
      port: port.unwrap(),
      username: username.unwrap_or_default(),
      password: password.unwrap_or_default(),
      database,
    })),
    "mysql" => Some(Box::new(MySqlDialect {
      host: host.unwrap(),
      port: port.unwrap(),
      username: username.unwrap_or_default(),
      password: password.unwrap_or_default(),
      database,
    })),
    "postgres" => Some(Box::new(PostgresDialect {
      host: host.unwrap(),
      port: port.unwrap(),
      username: username.unwrap_or_default(),
      password: password.unwrap_or_default(),
      database,
    })),
    // _ => Err("not support dialect".to_string()),
    _ => None,
  }
}

#[tauri::command]
pub async fn show_tables(path: String) -> ArrowResponse {
  unimplemented!()
}

#[tauri::command]
pub async fn query(
  sql: String,
  limit: usize,
  offset: usize,
  dialect: DialectPayload,
) -> Result<ArrowResponse, String> {
  if let Some(d) = get_dialect(dialect).await {
    let res = d.query(&sql, limit, offset).await;
    Ok(api::convert(res))
  } else {
    Err("not support dialect".to_string())
  }
}

#[tauri::command]
pub async fn query_table(
  table: &str,
  limit: usize,
  offset: usize,
  cond: &str,
  dialect: DialectPayload,
) -> Result<ArrowResponse, String> {
  let d = get_dialect(dialect.clone())
    .await
    .ok_or_else(|| format!("not support dialect {}", dialect.dialect))?;
  let res = d.query_table(table, limit, offset, cond).await;
  Ok(api::convert(res))
}

#[tauri::command]
pub async fn table_row_count(
  table: &str,
  limit: usize,
  offset: usize,
  dialect: DialectPayload,
) -> Result<u64, String> {
  if let Some(d) = get_dialect(dialect).await {
    d.table_row_count(table).await.map_err(|e| e.to_string())
  } else {
    Err("not support dialect".to_string())
  }
}

#[tauri::command]
pub async fn export(sql: String, file: String, dialect: DialectPayload) -> Result<(), String> {
  if let Some(d) = get_dialect(dialect).await {
    d.export(&sql, &file).await;
    Ok(())
  } else {
    Err("not support dialect".to_string())
  }
}

#[tauri::command]
pub async fn query_stream(
  window: Window,
  sql: &str,
  dialect: Option<ClickhouseDialect>,
) -> anyhow::Result<()> {
  let d = dialect.unwrap();
  let _ = d.query_stream(window, sql).await;
  Ok(())
}

#[tauri::command]
pub async fn opened_urls(state: State<'_, OpenedUrls>) -> Result<String, String> {
  let opened_urls = if let Some(urls) = &*state.0.lock().unwrap() {
    urls
      .iter()
      .map(|u| u.as_str().replace('\\', "\\\\"))
      .collect::<Vec<_>>()
      .join(", ")
  } else {
    "".into()
  };
  Ok(opened_urls)
}

#[tauri::command]
pub async fn get_db(
  dialect: &str,
  path: Option<String>,
  username: Option<String>,
  password: Option<String>,
  host: Option<String>,
  port: Option<String>,
  cwd: Option<String>,
  database: Option<String>,
) -> Result<TreeNode, String> {
  let payload = DialectPayload {
    dialect: dialect.to_string(),
    path,
    username,
    password,
    host,
    port,
    cwd,
    database,
  };

  if let Some(d) = get_dialect(payload).await {
    d.get_db().await.map_err(|e| e.to_string())
  } else {
    Err("not support dialect".to_string())
  }
}
