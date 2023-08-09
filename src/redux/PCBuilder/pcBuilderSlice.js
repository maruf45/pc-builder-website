import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcComponents: [],
};
const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addPcComponents: (state, action) => {
      state.pcComponents.push(action.payload);
    },
  },
});
console.log(initialState, "things");

export const { addPcComponents } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
