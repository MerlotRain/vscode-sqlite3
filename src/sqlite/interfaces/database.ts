export interface Database {
  execute: (
    sql: string,
    callback?: (rows: string[][], err?: Error) => void
  ) => void;

  close: (calloback?: (error?: Error) => void) => void;
}
