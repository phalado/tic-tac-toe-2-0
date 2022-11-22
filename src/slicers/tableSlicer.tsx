import { createSlice } from '@reduxjs/toolkit';
import TableInterface from '../interfaces/TableInterface';

const tableSlice = createSlice({
  name: 'table',
  initialState: [
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false}
  ],
  reducers: {
    changeTableState: (
      _state: any = {}, action: { payload: TableInterface[] }
    ) => action.payload,
  }
})

export const { changeTableState } = tableSlice.actions
export default tableSlice;
