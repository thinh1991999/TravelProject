import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { DetailState, GlobalState, GuestsEnum } from "../../interfaces/redux";

// Define the initial state using that type
const initialState: DetailState = {
  id: null,
  adults: 1,
  children: 0,
  infants: 0,
  pets: 0,
  checkin: null,
  checkout: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    handleIncreaseGuests: (state, action: PayloadAction<GuestsEnum>) => {
      state[action.payload]++;
    },
    handleDecreaseGuests: (state, action: PayloadAction<GuestsEnum>) => {
      if (state[action.payload] > 1) {
        state[action.payload]--;
      }
    },
  },
});

export const { handleIncreaseGuests, handleDecreaseGuests } =
  globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
