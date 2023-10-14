import { createSlice } from "@reduxjs/toolkit";

const adsSlice = createSlice({
  name: "ads",
  initialState: { ads: [] },
  reducers: {
    setAds: (state, action) => {
      state.ads = action.payload;
    },
  },
});

export default adsSlice.reducer;
export const { setAds } = adsSlice.actions;
