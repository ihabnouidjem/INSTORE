import { setUser } from "@/features/userSlice";
import { appState } from "@/pages/_app";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";

function ProfileOrders() {
  const user = useSelector((state) => state.user.user);
  const { postUserItems, updatesState, setUpdatesState } = useContext(appState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.newOrders > 0) {
      postUserItems(user.uid, { newOrders: 0 });
    }
  }, [user]);
  useEffect(() => {
    if (updatesState?.updateUser) {
      dispatch(setUser({ ...user, newOrders: 0 }));
      setUpdatesState({ ...updatesState, updateUser: false });
    }
  }, [updatesState]);
  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-8 py-3">
      <div className="w-[min(1500px,100%)] flex flex-col items-center gap-2">
        {user.orders?.length > 0 &&
          user.orders.map((order) => {
            return <OrderCard key={order.orderId} order={order} />;
          })}
      </div>
    </div>
  );
}

export default ProfileOrders;
