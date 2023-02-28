import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { GlobalState } from "../../interfaces/redux";

// Define the initial state using that type
const initialState: GlobalState = {
  isSearchHeader: false,
  searchDrop: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeShowSearch: (state, action: PayloadAction<Boolean>) => {
      state.isSearchHeader = action.payload;
    },
    setSearchDrop: (state, action: PayloadAction<number | null>) => {
      state.searchDrop = action.payload;
    },
  },
});

export const { changeShowSearch, setSearchDrop } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
