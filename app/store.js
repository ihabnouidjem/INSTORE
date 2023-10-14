import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/productsSlice";
import brandsReducer from "@/features/brandsSlice";
import adsReducer from "@/features/adsSlice";
import socialReducer from "@/features/socialSlice";
import FAQReducer from "@/features/FAQSlice";
import userReducer from "@/features/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    brands: brandsReducer,
    ads: adsReducer,
    social: socialReducer,
    FAQ: FAQReducer,
    user: userReducer,
  },
});

export default store;
