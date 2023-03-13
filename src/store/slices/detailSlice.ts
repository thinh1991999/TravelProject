import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { DetailState, GlobalState, GuestsEnum } from "../../interfaces/redux";
import { RoomDetail } from "../../interfaces/detail";

// Define the initial state using that type
const initialState: DetailState = {
  id: null,
  adults: 1,
  children: 0,
  infants: 0,
  pets: 0,
  checkin: null,
  checkout: null,
  list: [{ a: "1" }],
  roomDetail: null,
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
    setRoomDetail: (state, action: PayloadAction<RoomDetail>) => {
      state.roomDetail = action.payload;
    },
  },
});

export const { handleIncreaseGuests, handleDecreaseGuests, setRoomDetail } =
  globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
