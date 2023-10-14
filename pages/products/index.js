import ProductsContainer from "@/components/ProductsContainer";
import ProductsFilter from "@/components/ProductsFilter";
import { setMyProducts, setProducts } from "@/features/productsSlice";
import { setCart, setOrder, setUser } from "@/features/userSlice";
import { getServerSession } from "next-auth";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authOptions } from "../api/auth/[...nextauth]";
import { appState } from "../_app";

function ProductsPage({ user, products }) {
  const { getTime, totalPrice } = useContext(appState);

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
    if (products) {
      dispatch(setProducts(products));
      dispatch(setMyProducts(products));
    }
  }, [products]);

  return (
    <div className="min-h-screen w-full bg-zinc-50">
      <ProductsFilter />
      <ProductsContainer />
    </div>
  );
}

export default ProductsPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  const products = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/products`
  ).then((data) => data.json());

  if (!session) {
    const data = await Promise.all([products]);
    return {
      props: {
        user: false,
        products: data[0],
      },
    };
  }

  const user = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
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

  const data = await Promise.all([user, products]);

  return {
    props: {
      user: data[0],
      products: data[1],
    },
  };
}
