import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { GlobalState } from "../../interfaces/redux";

// Define the initial state using that type
const initialState: GlobalState = {
  isSearchHeader: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeShowSearch: (state, action: PayloadAction<Boolean>) => {
      state.isSearchHeader = action.payload;
    },
  },
});

export const { changeShowSearch } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
