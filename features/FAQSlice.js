import { createSlice } from "@reduxjs/toolkit";

const FAQSlice = createSlice({
  name: "FAQ",
  initialState: { FAQ: [] },
  reducers: {
    setFAQ: (state, action) => {
      state.FAQ = action.payload;
    },
  },
});

export default FAQSlice.reducer;
export const { setFAQ } = FAQSlice.actions;
