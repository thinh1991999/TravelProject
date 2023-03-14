import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { GlobalState } from "../../interfaces/redux";
import { Amenity, Category } from "../../interfaces/global";
import httpService from "../../services/httpService";

// Define the initial state using that type
const initialState: GlobalState = {
  isSearchHeader: false,
  searchDrop: null,
  amenities: [],
  categories: [],
  mainLoading: true,
  user: JSON.parse(localStorage.getItem("user") as any) || null,
  token: JSON.parse(localStorage.getItem("token") as any) || null,
};

export const fetchGlobalData = createAsyncThunk(
  "global/fetchGlobalData",
  async () => {
    const call1 = await httpService.getAmenities();
    const call2 = await httpService.getCategories();
    const result = await Promise.all([call1, call2])
      .then((res) => {
        const [call1, call2] = res;
        return {
          amenities: call1.data.amenities,
          categories: call2.data.categories,
        };
      })
      .catch((err) => {
        return null;
      });
    return await result;
  }
);

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
    setAmenities: (state, action: PayloadAction<Amenity[]>) => {
      state.amenities = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGlobalData.pending, (state, action) => {
      state.mainLoading = true;
    });
    builder.addCase(
      fetchGlobalData.fulfilled,
      (
        state,
        action: PayloadAction<{
          amenities: Amenity[];
          categories: Category[];
        } | null>
      ) => {
        if (action.payload !== null) {
          state.amenities = action.payload.amenities;
          state.categories = action.payload.categories;
          state.mainLoading = false;
        }
      }
    );
  },
});

export const {
  changeShowSearch,
  setSearchDrop,
  setAmenities,
  setCategories,
  setUser,
  setToken,
} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default globalSlice.reducer;
