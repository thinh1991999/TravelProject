import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import detailSlice from "./slices/detailSlice";
import globalSlice from "./slices/globalSlice";
import searchSlice from "./slices/searchSlice";

// ...

export const store = configureStore({
  reducer: {
    global: globalSlice,
    detail: detailSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
