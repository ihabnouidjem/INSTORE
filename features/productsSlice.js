import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    myProducts: [],
    related: [],
    product: {},
    filter: [],
    search: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setMyProducts: (state, action) => {
      state.myProducts = action.payload;
    },
    setRelated: (state, action) => {
      state.related = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const {
  setProducts,
  setMyProducts,
  setRelated,
  setProduct,
  setFilter,
  setSearch,
} = productsSlice.actions;
