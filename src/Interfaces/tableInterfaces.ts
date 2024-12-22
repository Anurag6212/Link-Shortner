export interface TableData {
  shortLink: string;
  originalLink: string;
  status: string;
  date: string;
  clicks: number;
  id: string;
}

export interface EditTable {
  isOpenEditModal: boolean;
  data?: object | null;
  isOpenDeleteModal: boolean;
}

export interface ShortnerState {
  tableData: TableData[];
  tableInput: string;
  editTable: EditTable;
}
