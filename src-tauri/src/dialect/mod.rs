use async_trait::async_trait;
use serde::{Deserialize, Serialize};

use crate::api::RawArrowData;

pub mod clickhouse;
pub mod duckdb;
pub mod file;
pub mod folder;
pub mod mysql;
pub mod postgres;
pub mod sqlite;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TreeNode {
  pub name: String,
  pub path: String,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub children: Option<Vec<TreeNode>>,
  #[serde(rename(serialize = "type"))]
  pub node_type: String,
}

#[derive(Debug, Default, Clone, Serialize, Deserialize)]
pub struct Title {
  pub name: String,
  pub r#type: String,
}

#[async_trait]
pub trait Dialect: Sync + Send {
  async fn get_db(&self) -> anyhow::Result<TreeNode>;
  async fn query(&self, _sql: &str, _limit: usize, _offset: usize) -> anyhow::Result<RawArrowData> {
    unimplemented!()
  }
  async fn query_table(
    &self,
    table: &str,
    limit: usize,
    offset: usize,
    cond: &str,
  ) -> anyhow::Result<RawArrowData> {
    let mut sql = format!("select * from {}", table);
    if !cond.is_empty() {
      sql = format!("{sql} where {cond}")
    }
    if limit != 0 {
      sql = format!("{sql} limit {limit}")
    }
    if offset != 0 {
      sql = format!("{sql} offset {offset}")
    }
    println!("query table {}: {}", table, sql);
    self.query(&sql, 0, 0).await
  }
  async fn export(&self, _sql: &str, _file: &str) {
    unimplemented!()
  }

  async fn table_row_count(&self, table: &str) -> anyhow::Result<u64> {
    unimplemented!()
  }
}
