export interface TableData {
  shortLink: string;
  originalLink: string;
  status: string;
  date: string;
  clicks: number;
  id: string;
}

export interface EditTable {
  isOpen: boolean;
  data?: object | null;
}

export interface ShortnerState {
  tableData: TableData[];
  tableInput: string;
  editTable: EditTable;
}
