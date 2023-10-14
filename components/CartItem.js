import Image from "next/image";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useSelector } from "react-redux";

function CartItem({ product }) {
  const products = useSelector((state) => state.products.products);

  const inStock = (products, product) => {
    let inStock = true;
    products.map((prdct) => {
      if (prdct._id == product.pid && prdct.quantity < product.quantity) {
        inStock = false;
      }
    });
    return inStock;
  };
  return (
    <div className="w-full flex flex-row">
      <Image
        className="w-[120px] h-[120px] flex items-center justify-center object-cover rounded-sm"
        src={product.image}
        height={500}
        width={500}
        alt="Product img"
      />
      <div className="w-full flex flex-col gap-2 p-2">
        <p className="p text-zinc-800">
          <span className="h5 text-zinc-900">
            {product?.brand && `${product.brand} - `}
          </span>
          {product?.name && product.name}
        </p>
        <div className="w-full flex flex-row flex-wrap gap-6 ">
          <h3 className="h3 text-teal-900">
            {product.quantity &&
              product.price &&
              `${product.quantity}x${product.price}.00 = ${
                product.price * product.quantity
              }.00 DZD`}
          </h3>
          <div className="flex flex-row items-center gap-2 ml-auto">
            <button className="p-2 rounded-xl bg-zinc-100 shadow-md">
              <i
                className={`icon-24 ${
                  product.quantity == 0 ? "text-zinc-300" : "text-zinc-900"
                }`}
              >
                <BiMinus />
              </i>
            </button>
            <h5
              className={`h5 ${
                !inStock(products, product) ? "text-red-400" : "text-zinc-900"
              }`}
            >
              {product?.quantity}
            </h5>
            <button className="p-2 rounded-xl bg-zinc-100 shadow-md">
              <i
                className={`icon-24 ${
                  !inStock(products, product)
                    ? "text-zinc-300"
                    : "text-zinc-900"
                }`}
              >
                <BsPlusLg />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
