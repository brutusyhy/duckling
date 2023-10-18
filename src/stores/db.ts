import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
export interface FileNode {
  name: string;
  type?: string;
  path: string;
  is_dir: boolean;
  children?: FileNode[];
}

export type DBType = {
  data: FileNode;
  cwd?: string;
};

interface DBState {
  dbList: DBType[];
  append: (db: DBType) => void;
  update: (db: Partial<FileNode>) => void;
  remove: (dbName: string) => void;
  setCwd: (cwd: string, path: string) => void;
}

export const useDBStore = create<DBState>()(
  devtools(
    persist(
      (set) => ({
        dbList: [],
        append: (db) => set((state) => ({ dbList: [...state.dbList, db] })),
        remove: (dbName) =>
          set((state) => ({
            dbList: state.dbList?.filter(
              (item) => !(item.data.path === dbName)
            ),
          })),
        update: ({ path, children }) =>
          set((state) => ({
            dbList: state.dbList.map((item) => {
              if (item.data.path == path) {
                return {
                  ...item,
                  data: {
                    ...item.data,
                    children: children,
                  },
                };
              }
              return item;
            }),
          })),
        setCwd: (cwd: string, path: string) =>
          set((state) => ({
            dbList: state.dbList.map((item) => {
              return item.data.path == path
                ? {
                    ...item,
                    cwd,
                  }
                : item;
            }),
          })),
      }),
      {
        name: "dbStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);