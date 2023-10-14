import { setNewProduct } from "@/features/userSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsHandbag, BsSuitHeart, BsStar } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function ProductShowcase() {
  const product = useSelector((state) => state.products.product);
  const user = useSelector((state) => state.user.user);
  const [showcaseState, setShowcaseState] = useState({
    currImage: null,
  });

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (product && product.images?.length > 0) {
      setShowcaseState({ ...showcaseState, currImage: product.images[0] });
    }
  }, [product]);
  return (
    <div className="w-full flex flex-col items-center gap-6 py-8 px-3 sm:px-8 ">
      {product && (
        <>
          <div className="w-[min(1500px,100%)] flex flex-row items-center flex-wrap gap-6">
            <h2 className="h2 text-zinc-900">
              {product.brand
                ? `${product.brand} - ${product.name && product.name}`
                : `${product.name && product.name}`}
            </h2>
            <h3 className="h3 text-teal-900 ml-auto">
              {product.price && `${product.price}.00 DZD`}
            </h3>
          </div>
          <div className="w-[min(1500px,100%)] flex flex-col xl:flex-row gap-6 ">
            {showcaseState.currImage && (
              <Image
                className="w-full xl:w-[calc(100%-360px)] h-[400px] md:h-[500px] xl:h-[600px] flex items-center justify-center object-contain bg-zinc-100 rounded-sm"
                src={showcaseState.currImage}
                height={600}
                width={2000}
                alt="product"
              />
            )}
            <div className="w-full xl:min-w-[336px] xl:w-[336px] xl:h-[600px] u-scrollbar-hidden flex flex-row xl:flex-wrap items-center overflow-x-scroll xl:overflow-y-scroll gap-3 sm:gap-4">
              {product.images?.length > 0 &&
                product.images.map((image, index) => {
                  return (
                    <button
                      key={index}
                      className="min-w-[120px] w-[120px] min-h-[120px] h-[120px] sm:min-w-[160px] sm:w-[160px] sm:min-h-[160px] sm:h-[160px]"
                      onClick={() => {
                        setShowcaseState({
                          ...showcaseState,
                          currImage: image,
                        });
                      }}
                    >
                      <Image
                        className="min-w-[120px] w-[120px] min-h-[120px] h-[120px] sm:min-w-[160px] sm:w-[160px] sm:min-h-[160px] sm:h-[160px] flex items-center justify-center object-cover rounded-sm"
                        src={image}
                        height={200}
                        width={200}
                        alt="product"
                      />
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="w-[min(1500px,100%)] flex flex-row items-center flex-wrap gap-6">
            <button
              className="flex flex-row items-center gap-2 py-2 px-6 rounded-sm bg-zinc-900 text-zinc-50"
              onClick={() => {
                if (user) {
                  dispatch(
                    setNewProduct({
                      pid: product._id,
                      name: product.name,
                      brand: product.brand,
                      price: product.price,
                      image: product.images[0],
                      quantity: 1,
                    })
                  );
                } else {
                  router.push("/signin");
                }
              }}
            >
              <h5 className="h5">ADD TO CART</h5>
              <i className="icon-24">
                <BsHandbag />
              </i>
            </button>
            <div className="flex flex-row items-center gap-3 ml-auto">
              <button className="bg-zinc-100 p-4 rounded-xl text-zinc-900">
                <i className="icon-24">
                  <BsStar />
                </i>
              </button>
              <button className="bg-zinc-100 p-4 rounded-xl text-zinc-900">
                <i className="icon-24">
                  <BsSuitHeart />
                </i>
              </button>
              <button className="bg-zinc-100 p-4 rounded-xl text-zinc-900">
                <i className="icon-24">
                  <FaShare />
                </i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductShowcase;
