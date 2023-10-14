import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function ProductCard({ product }) {
  const { _id, brand, name, price, description, props, status, images } =
    product;
  const router = useRouter();

  return (
    <div
      className="w-[min(100%,400px)] flex flex-col items-center bg-zinc-50 mx-auto"
      onClick={(e) => {
        e.preventDefault();
        router.push(`/products/${product?._id}`);
      }}
    >
      <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
        {images && (
          <Image
            className="w-full h-full flex items-center justify-center object-cover rounded-sm hover:scale-110 transition duration-150"
            src={images[0]}
            height={500}
            width={500}
            alt="Product img"
          />
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-1 p-1 sm:gap-2 sm:p-2">
        <h5 className="w-full text-center text-zinc-900 h5 text-ellipsis whitespace-nowrap overflow-hidden">
          {brand && brand}
        </h5>
        <div className="w-full flex flex-row gap-[8px] items-center justify-between">
          <p className="p text-zinc-800 w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {name && name}
          </p>
          <h6 className="h6 text-teal-900 whitespace-nowrap">
            {status && status}
          </h6>
        </div>
        <Link
          href={`/products/${product?._id}`}
          className="w-full rounded-sm bg-zinc-900 flex items-center justify-center py-2 sm:py-3"
        >
          <h5 className="text-zinc-50 h5">{"SHOP NOW"}</h5>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
