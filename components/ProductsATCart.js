import { setNewProduct, setUser } from "@/features/userSlice";
import { appState } from "@/pages/_app";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BsHandbag, BsPlusLg, BsXLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function ProductsATCart() {
  const newProduct = useSelector((state) => state.user.newProduct);
  const product = useSelector((state) => state.products.product);
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  const { postUserItems, updatesState, setUpdatesState } = useContext(appState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (updatesState.updateUser) {
      dispatch(setUser({ ...user, cart: [...user.cart, newProduct] }));
      setUpdatesState({ ...updatesState, updateUser: false });
      dispatch(setNewProduct(null));
    }
  }, [updatesState]);
  return (
    <div
      className="w-full h-screen z-[1000] fixed top-0 left-0 bg-black-70 u-scrollbar-hidden"
      //   onClick={() => dispatch(setNewProduct(null))}
    >
      <div className="w-full h-14 sm:h-20 flex flex-row items-center justify-end px-3 sm:px-8">
        <i
          className="icon-24 text-zinc-50"
          onClick={() => dispatch(setNewProduct(null))}
        >
          <BsXLg />
        </i>
      </div>
      {newProduct && (
        <div className="w-full z-[1001] min-h-full px-3 sm:px-8 py-20 sm:py-32 flex flex-col items-center justify-center">
          <div className="w-[min(800px,100%)] gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-900 flex flex-col items-center">
            <div className="w-full py-2 border-b border-zinc-700">
              <h5 className="h5 text-zinc-100 w-full text-center">
                {newProduct.brand &&
                  `${newProduct.brand} - ${newProduct.name && newProduct.name}`}
              </h5>
            </div>
            {``}
            <div className="w-full flex flex-row flex-wrap gap-4 ">
              <h3 className="h3 text-teal-500">
                {newProduct.price &&
                  `${newProduct.quantity ? newProduct.quantity : 1}x${
                    newProduct.price
                  }.00 = ${
                    newProduct.quantity
                      ? newProduct.quantity * newProduct.price
                      : newProduct.price
                  }.00 DZD`}
              </h3>
              <div className="flex flex-row items-center gap-2 ml-auto">
                <button
                  className="p-2 rounded-xl bg-zinc-800 shadow-md"
                  onClick={() => {
                    if (newProduct.quantity > 1) {
                      dispatch(
                        setNewProduct({
                          ...newProduct,
                          quantity: newProduct.quantity - 1,
                        })
                      );
                    }
                  }}
                >
                  <i
                    className={`icon-24 ${
                      newProduct.quantity > 1 ? "text-zinc-50" : "text-zinc-700"
                    }`}
                  >
                    <BiMinus />
                  </i>
                </button>
                <h5
                  className={`h5 ${
                    product.quantity >= newProduct.quantity
                      ? "text-zinc-300"
                      : "text-red-400"
                  }`}
                >
                  {newProduct.quantity ? newProduct.quantity : 1}
                </h5>
                <button
                  className="p-2 rounded-xl bg-zinc-800 shadow-md"
                  onClick={() => {
                    if (product.quantity > newProduct.quantity) {
                      dispatch(
                        setNewProduct({
                          ...newProduct,
                          quantity: newProduct.quantity + 1,
                        })
                      );
                    }
                  }}
                >
                  <i
                    className={`icon-24 ${
                      product.quantity > newProduct.quantity
                        ? "text-zinc-50"
                        : "text-zinc-700"
                    }`}
                  >
                    <BsPlusLg />
                  </i>
                </button>
              </div>
            </div>
            {``}
            <div className="w-full flex flex-row justify-end">
              <button
                className="flex flex-row items-center gap-2 py-2 px-6 rounded-sm bg-zinc-800 text-zinc-100"
                onClick={() => {
                  if (
                    product.quantity >= newProduct.quantity &&
                    newProduct.quantity > 0
                  )
                    postUserItems(user.uid, {
                      cart: [...user.cart, newProduct],
                      newProducts: user.newProducts + 1,
                    });
                }}
              >
                <h5 className="h5">ADD TO CART</h5>
                <i className="icon-24">
                  <BsHandbag />
                </i>
              </button>
            </div>
            {``}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsATCart;
