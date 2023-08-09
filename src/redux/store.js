import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./PCBuilder/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
  devTools: true,
});

export default store;
