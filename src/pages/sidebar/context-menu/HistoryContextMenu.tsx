import { runsAtom } from '@/stores/app.ts';
import { QueryContextType } from '@/stores/tabs.ts';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { useSetAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import { ContextMenuItem } from '@/components/custom/context-menu';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function HistoryContextMenu({
  children,
  ctx,
}: PropsWithChildren<{ ctx: QueryContextType }>) {
  const setItems = useSetAtom(runsAtom);

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={async (e) => {
            e.stopPropagation();
            await writeText(ctx.stmt ?? '');
          }}
        >
          Copy
        </ContextMenuItem>{' '}
        <ContextMenuItem
          onClick={async (e) => {
            e.stopPropagation();
            setItems((prev) => prev.filter((p) => p.id != ctx.id));
          }}
        >
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}