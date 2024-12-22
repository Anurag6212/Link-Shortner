import { EditTable, ShortnerState, TableData } from '@/Interfaces/tableInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: ShortnerState = {
  tableData: [
    {
      shortLink: 'https://linkly.com/Bn41aCOlnxj',
      originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
      status: 'Active',
      date: 'Oct 10 2023',
      clicks: 100,
      id: '12',
    },
  ],
  tableInput: '',
  editTable: {
    isOpen: false,
    data: null,
  },
};

const shortnerSlice = createSlice({
  name: 'shortner',
  initialState,
  reducers: {
    changeTableInput: (state, action: PayloadAction<string>) => {
      state.tableInput = action.payload;
    },
    handleEditTable: (state, action: PayloadAction<EditTable | null>) => {
      state.editTable.isOpen = state.editTable.isOpen;
      state.editTable.data = action.payload;
    },
    addUrl: (state, action: PayloadAction<TableData>) => {
      state.tableData.push(action.payload);
    },
    removeUrl: (state, action: PayloadAction<string>) => {
      state.tableData = state.tableData.filter(
        (data) => data.id !== action.payload
      );
    },
    updateUrl: (state, action: PayloadAction<TableData>) => {
      const index = state.tableData.findIndex(
        (data) => data.id === action.payload.id
      );
      if (index !== -1) {
        state.tableData[index] = action.payload;
      }
    },
  },
});

export const {
  addUrl,
  removeUrl,
  updateUrl,
  changeTableInput,
  handleEditTable,
} = shortnerSlice.actions;

export default shortnerSlice.reducer;
