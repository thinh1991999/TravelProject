import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { SearchState } from "../../interfaces/redux";
import { Room } from "../../interfaces/global";

const initialState: SearchState = {
  data: [],
  hoverId: null,
  activeId: null,
  showMap: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Room[]>) => {
      state.data = action.payload;
    },
    setHoverId: (state, action: PayloadAction<string | null>) => {
      state.hoverId = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | null>) => {
      state.activeId = action.payload;
    },
    setShowmap: (state) => {
      state.showMap = !state.showMap;
    },
  },
});

export const { setData, setHoverId, setActiveId, setShowmap } =
  globalSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
