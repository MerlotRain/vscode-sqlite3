export enum StatementType {
  COMMAND = "COMMAND",
  PRAGMA = "PRAGMA",
  SELECT = "SELECT",
  INSERT = "INSERT",
  EXPLAIN = "EXPLAIN",
  OTHER = "OTHER",
}

export interface StatementPosition {
    start: number[];
    end: number[];
}

export interface Statement {
  sql: string;
  type: StatementType;
  position: StatementPosition;
}

