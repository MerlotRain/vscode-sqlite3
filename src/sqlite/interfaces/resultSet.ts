import { Statement } from "./statement";

interface ResuleData {
  header: string[];
  rows: string[][];
}

export type ResultSet = Array<{
  statement: Statement;
  executed: boolean;
  error?: Error;
  data?: ResuleData;
}>;
