import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TStateProps = {
  ordering: string;
  isOrder:boolean
};

const initialState: TStateProps = {
  ordering: "id",
  isOrder:false
};

export const contestSlice = createSlice({
  name: "contest",
  initialState,
  reducers: {
    orderingFunction: (state, action: PayloadAction<string>) => {
      state.ordering = action.payload;
    },
    isOrderingFunction:(state,action:PayloadAction<boolean>)=>{
      state.isOrder=!action.payload;
    }
  },
});

export const { orderingFunction ,isOrderingFunction} = contestSlice.actions;
export default contestSlice.reducer;
