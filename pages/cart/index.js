import ProfileCart from "@/components/ProfileCart";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileOrders from "@/components/ProfileOrders";
import ProfileSaved from "@/components/ProfileSaved";
import { setProducts } from "@/features/productsSlice";
import { setCart, setOrder, setSaved, setUser } from "@/features/userSlice";
import { getServerSession } from "next-auth";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOptions } from "../api/auth/[...nextauth]";
import { appState } from "../_app";

function CartPage({ user, products }) {
  const currSection = useSelector((state) => state.user.currSection);
  const dispatch = useDispatch();
  const { getTime, totalPrice } = useContext(appState);

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
    }
  }, [products]);
  useEffect(() => {
    if (user && user.saved?.length > 0 && products) {
      const saved = products.filter((product) => {
        return user.saved.includes(product._id);
      });
      dispatch(setSaved(saved));
    }
  }, [user, products]);

  return (
    <div className="w-full min-h-screen bg-zinc-50">
      <ProfileHeader />
      {currSection === "cart" ? (
        <ProfileCart />
      ) : currSection === "orders" ? (
        <ProfileOrders />
      ) : (
        currSection === "saved" && <ProfileSaved />
      )}
    </div>
  );
}

export default CartPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session)
    return {
      redirect: {
        destination: `/signin?callbackUrl=${`/cart`}`,
        peranent: false,
      },
    };

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

  const products = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/products`
  ).then((data) => data.json());

  const data = await Promise.all([user, products]);

  return {
    props: {
      user: data[0],
      products: data[1],
    },
  };
}
