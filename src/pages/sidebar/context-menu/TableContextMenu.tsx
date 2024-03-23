import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { nanoid } from 'nanoid';
import { PropsWithChildren } from 'react';

import { dropTable } from '@/api';
import { ContextMenuItem } from '@/components/custom/context-menu';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { searchAtom } from '@/pages/sidebar/context-menu/SearchDialog';
import { DBType, DialectConfig } from '@/stores/dbList';
import { TableContextType, useTabsStore } from '@/stores/tabs';
import { TreeNode } from '@/types';
import { useAtom } from 'jotai';

export function TableContextMenu({
  children,
  node,
  db,
}: PropsWithChildren<{ node: TreeNode; db: DBType }>) {
  const updateTab = useTabsStore((state) => state.update);
  const [search, setSearch] = useAtom(searchAtom);

  const handleDropTable: React.MouseEventHandler<HTMLDivElement> = async (
    e,
  ) => {
    e.stopPropagation();
    await dropTable(node.path, db.config as DialectConfig);
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={async (e) => {
            e.stopPropagation();
            console.log(node);
            const item: TableContextType = {
              id: nanoid(),
              dbId: db.id,
              tableId: node.path,
              displayName: node?.name as string,
              type: 'column',
            };
            updateTab!(item);
          }}
        >
          Show columns
        </ContextMenuItem>
        {db.dialect == 'folder' ? (
          <>
            <ContextMenuItem
              onClick={async (e) => {
                e.stopPropagation();
                console.log(node);
                const item: TableContextType = {
                  id: nanoid(),
                  dbId: db.id,
                  tableId: node.path,
                  tableName:
                    node.type == 'path'
                      ? `read_parquet('${node.path}/*.parquet', union_by_name=true, filename=true)`
                      : undefined,
                  displayName: node?.name as string,
                  type: 'table',
                };
                updateTab!(item);
              }}
            >
              Show *.parquet
            </ContextMenuItem>
            <ContextMenuItem
              onClick={async (e) => {
                e.stopPropagation();
                console.log(node);
                const item: TableContextType = {
                  id: nanoid(),
                  dbId: db.id,
                  tableId: node.path,
                  tableName:
                    node.type == 'path'
                      ? `read_csv('${node.path}/*.csv', union_by_name=true, filename=true)`
                      : undefined,
                  displayName: node?.name as string,
                  type: 'table',
                };
                updateTab!(item);
              }}
            >
              Show *.csv
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              onClick={async (e) => {
                e.stopPropagation();
                console.log(node);
                const item: TableContextType = {
                  id: nanoid(),
                  dbId: db.id,
                  tableId: node.path,
                  displayName: node?.name as string,
                  type: 'table',
                };

                setSearch({ open: true, item });
              }}
            >
              Search
            </ContextMenuItem>
          </>
        ) : null}

        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleDropTable}>Delete</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          onClick={async (e) => {
            e.stopPropagation();
            await writeText(node.path);
          }}
        >
          Copy
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
