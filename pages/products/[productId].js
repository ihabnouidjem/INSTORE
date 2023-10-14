import Ads from "@/components/Ads";
import ProductInfo from "@/components/ProductInfo";
import ProductsATCart from "@/components/ProductsATCart";
import ProductsContainer from "@/components/ProductsContainer";
import ProductShowcase from "@/components/ProductShowcase";
import { setAds } from "@/features/adsSlice";
import {
  setMyProducts,
  setProduct,
  setRelated,
} from "@/features/productsSlice";
import { setCart, setOrder, setUser } from "@/features/userSlice";
import { getServerSession } from "next-auth";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOptions } from "../api/auth/[...nextauth]";
import { appState } from "../_app";

function ProductPage({ user, product, ads, related }) {
  const { getTime, totalPrice } = useContext(appState);
  const newCartProduct = useSelector((state) => state.user.newProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      dispatch(setCart(user.cart));
      dispatch(
        setOrder({
          time: getTime(),
          total: totalPrice(user.cart),
          products: user.cart,
        })
      );
    }
  }, [user]);
  useEffect(() => {
    if (product) {
      dispatch(setProduct(product));
    }
  }, [product]);
  useEffect(() => {
    if (ads) {
      dispatch(setAds(ads));
    }
  }, [ads]);
  useEffect(() => {
    if (related) {
      dispatch(setMyProducts(related));
    }
  }, [related]);
  return (
    <div className="min-h-screen w-full bg-zinc-50">
      {newCartProduct && <ProductsATCart />}
      <ProductShowcase />
      <ProductInfo />
      <Ads />
      <ProductsContainer />
    </div>
  );
}

export default ProductPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { productId } = await context.params;

  const ads = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore-eta.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/ads`
  ).then((data) => data.json());

  const related = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore-eta.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/products/related/${productId}`
  ).then((data) => data.json());

  if (!session) {
    const product = fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://instore-eta.vercel.app"
          : process.env.NODE_ENV === "development" && "http://localhost:3000"
      }/api/products/${productId}`
    ).then((data) => data.json());

    const data = await Promise.all([product, ads, related]);

    return {
      props: {
        user: false,
        product: data[0],
        ads: data[1],
        related: data[2],
      },
    };
  } else {
    const product = fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://instore-eta.vercel.app"
          : process.env.NODE_ENV === "development" && "http://localhost:3000"
      }/api/products/${productId}`
    ).then((data) => data.json());

    const user = fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://instore-eta.vercel.app"
          : process.env.NODE_ENV === "development" && "http://localhost:3000"
      }/api/users/${session.user?.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(session.user),
      }
    ).then((data) => data.json());

    const data = await Promise.all([user, product, ads, related]);

    return {
      props: {
        user: data[0],
        product: data[1],
        ads: data[2],
        related: data[3],
      },
    };
  }
}
