import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductsContainer() {
  const filter = useSelector((state) => state.products.filter);
  const myProducts = useSelector((state) => state.products.myProducts);
  const search = useSelector((state) => state.products.search);
  const router = useRouter();

  return (
    <>
      {myProducts?.length > 0 && (
        <div className="w-full flex flex-col gap-6 items-center py-8 px-3 sm:px-8 ">
          <div className="w-[min(1500px,100%)] ">
            <h3 className="h3 text-zinc-900">
              {["/products"].includes(router.pathname) &&
              search &&
              search !== ""
                ? `SEARCH FOR ${search}`
                : ["/products"].includes(router.pathname)
                ? `ALL PRODUCTS`
                : ["/products/categories/[categoryName]"].includes(
                    router.pathname
                  ) || ["/products/types/[typeName]"].includes(router.pathname)
                ? `FILTERED PRODUCTS`
                : `RELATED PRODUCTS`}
            </h3>
          </div>
          <div className="w-[min(1500px,100%)] grid grid-cols-repeatPHNProducts sm:grid-cols-repeatTABProducts lg:grid-cols-repeatProducts gap-3 sm:gap-6">
            {myProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsContainer;
