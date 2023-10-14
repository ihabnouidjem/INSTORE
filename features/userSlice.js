import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    cart: [],
    newProduct: null,
    currSection: "cart",
    order: {},
    saved: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setNewProduct: (state, action) => {
      state.newProduct = action.payload;
    },
    setSection: (state, action) => {
      state.currSection = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSaved: (state, action) => {
      state.saved = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setCart,
  setNewProduct,
  setSection,
  setOrder,
  setSaved,
} = userSlice.actions;
