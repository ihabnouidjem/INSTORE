import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",
  initialState: { brands: [] },
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
});

export default brandsSlice.reducer;
export const { setBrands } = brandsSlice.actions;
