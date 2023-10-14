import { setSection } from "@/features/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfileHeader() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const currSection = useSelector((state) => state.user.currSection);

  return (
    <div className="w-full flex items-center justify-center py-3 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] flex flex-row items-center ">
        <button
          className={`grid grid-cols-1fr grid-rows-1fr ${
            currSection === "cart"
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-50 text-zinc-900"
          } rounded-sm`}
          onClick={() => {
            dispatch(setSection("cart"));
          }}
        >
          <h5 className="h5 col-12 row-12 z-0 py-2 px-6">CART</h5>
          {user.newProducts > 0 && (
            <h6
              className={`w-fit h-fit small-h6 col-12 row-12 z-10 px-[4px] rounded-md border-2 ${
                currSection === "cart" ? "border-zinc-900" : "border-zinc-50"
              } bg-teal-900 text-zinc-50 ml-auto mt-auto mr-[2px] mb-[2px]`}
            >
              {`+${user.newProducts}`}
            </h6>
          )}
        </button>
        <button
          className={`grid grid-cols-1fr grid-rows-1fr ${
            currSection === "orders"
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-50 text-zinc-900"
          } rounded-sm`}
          onClick={() => {
            dispatch(setSection("orders"));
          }}
        >
          <h5 className="h5 col-12 row-12 z-0 py-2 px-6">ORDERS</h5>
          {user?.newOrders > 0 && (
            <h6
              className={`w-fit h-fit small-h6 col-12 row-12 z-10 px-[4px] rounded-md border-2 ${
                currSection === "orders" ? "border-zinc-900" : "border-zinc-50"
              } bg-teal-900 text-zinc-50 ml-auto mt-auto mr-[2px] mb-[2px]`}
            >
              {`+${user.newOrders}`}
            </h6>
          )}
        </button>
        <button
          className={`grid grid-cols-1fr grid-rows-1fr ${
            currSection === "saved"
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-50 text-zinc-900"
          } rounded-sm`}
          onClick={() => {
            dispatch(setSection("saved"));
          }}
        >
          <h5 className="h5 col-12 row-12 z-0 py-2 px-6">SAVED</h5>
          {user?.newSaved > 0 && (
            <h6
              className={`w-fit h-fit small-h6 col-12 row-12 z-10 px-[4px] rounded-md border-2 ${
                currSection === "saved" ? "border-zinc-900" : "border-zinc-50"
              } bg-teal-900 text-zinc-50 ml-auto mt-auto mr-[2px] mb-[2px]`}
            >
              {`+${user.newSaved}`}
            </h6>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
