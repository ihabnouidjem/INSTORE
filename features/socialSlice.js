import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "social",
  initialState: { social: [] },
  reducers: {
    setSocial: (state, action) => {
      state.social = action.payload;
    },
  },
});

export default socialSlice.reducer;
export const { setSocial } = socialSlice.actions;
