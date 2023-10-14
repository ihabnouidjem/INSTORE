import { setCart, setUser } from "@/features/userSlice";
import { appState } from "@/pages/_app";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

function ProfileCart() {
  const {
    totalPrice,
    getTime,
    checkout,
    updatesState,
    setUpdatesState,
    postUserItems,
  } = useContext(appState);
  const cart = useSelector((state) => state.user.cart);
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.user.order);
  const [cartState, setCartState] = useState({ action: null });
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.newProducts > 0) {
      postUserItems(user.uid, { newProducts: 0 });
    }
  }, [user]);
  useEffect(() => {
    if (updatesState?.updateUser && cartState.action === "empty cart") {
      dispatch(setCart([]));
      dispatch(
        setUser({
          ...user,
          cart: [],
          orders: [...user.orders, order],
          cart: {},
          newOrders: user.newOrders + 1,
          newProducts: 0,
        })
      );
      setCartState({ ...cartState, action: null });
      setUpdatesState({ ...updatesState, updateUser: false });
    } else if (updatesState?.updateUser) {
      dispatch(
        setUser({
          ...user,

          newProducts: 0,
        })
      );
      setUpdatesState({ ...updatesState, updateUser: false });
    }
  }, [updatesState]);
  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-8 py-3">
      {cart && cart.length > 0 ? (
        <>
          <div className="w-[min(1500px,100%)] flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center gap-6">
              {cart &&
                cart.length > 0 &&
                cart.map((product) => {
                  return <CartItem key={product?.pid} product={product} />;
                })}
            </div>

            <div className="w-[min(1500px,100%)] flex flex-row flex-wrap gap-6 justify-end">
              <div className="flex flex-row items-center border border-zinc-900 w-[min(600px,100%)] h-12">
                <input
                  className="bg-transparent border-none outline-none h-full w-full text-zinc-800 px-2"
                  type="text"
                  placeholder="Enter promo code"
                />
                <button className="h-full bg-zinc-900 text-zinc-50 px-6">
                  <h5 className="h5">{`apply`} </h5>
                </button>
              </div>
              <button
                className="bg-teal-900 text-zinc-50 px-6 py-2"
                onClick={() => {
                  setCartState({ ...cartState, action: "empty cart" });
                  checkout(
                    user.uid,
                    {
                      ...order,
                      uid: user.uid,
                      uname: user.uname,
                      uemail: user.uemail,
                    },
                    order,
                    user
                  );
                }}
              >
                <h5 className="h5">
                  {`CHECKOUT | ${totalPrice(cart)}.00 DZD`}{" "}
                </h5>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[min(1500px,100%)] flex flex-col items-center ">
          <div className="w-full flex flex-row flex-wrap items-center gap-2 py-6">
            <h5 className="h5 text-zinc-900">Your cart is empty!</h5>
            <Link
              href={`/products`}
              className="rounded-sm bg-zinc-900 flex items-center justify-center py-2 px-6 sm:py-3"
            >
              <h5 className="text-zinc-50 h5">{"SHOP NOW"}</h5>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCart;
