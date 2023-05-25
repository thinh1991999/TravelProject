import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { DetailState, GlobalState, GuestsEnum } from "../../interfaces/redux";
import { RoomDetail } from "../../interfaces/detail";
import { getAverageRating, getDateArrBetween } from "../../share/ultils";

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
  rating: 0,
  disabledDate:[]
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
      state.checkin=null;
      state.checkout=null;
      state.adults=1;
      state.children=0;
      state.pets=0
      state.rating = getAverageRating(action.payload.reviews);
      const bookings=action.payload.bookings;
      console.log(bookings);
      
      const disabedArr=[];
      for(let vl of bookings){
        // console.log(vl,getDateArrBetween(vl.checkIn, vl.checkOut));
        disabedArr.push(...getDateArrBetween(vl.checkIn,vl.checkOut));
      }
      state.disabledDate = disabedArr;
      state.roomDetail = action.payload;
    },
    setCheckin: (state, action: PayloadAction<Date | null>) => {
      state.checkin = action.payload;
    },
    setCheckout: (state, action: PayloadAction<Date | null>) => {
      state.checkout = action.payload;
    },
    clearCheck: (state) => {
      state.checkout = null;
      state.checkin = null;
    },
  },
});

export const {
  handleIncreaseGuests,
  handleDecreaseGuests,
  setRoomDetail,
  setCheckin,
  setCheckout,
  clearCheck,
} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
