import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function HomeProducts() {
  const products = useSelector((state) => state.products.products);
  const [productsState, setProductsState] = useState({
    products: [],
  });

  useEffect(() => {
    if (products.length <= 8) {
      setProductsState({ ...productsState, products: products });
    } else {
      setProductsState({ ...productsState, products: products.slice(0, 8) });
    }
  }, [products]);
  return (
    <div className="py-16 px-3 sm:px-8 flex items-center justify-center">
      <div className="w-[min(1500px,100%)] flex flex-col items-center gap-6">
        <div className="w-full text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
          <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
          <h3 className="h3">NEWEST</h3>
          <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
        </div>
        <div className="w-[min(1500px,100%)] grid grid-cols-repeatPHNProducts sm:grid-cols-repeatTABProducts lg:grid-cols-repeatProducts gap-3 sm:gap-6">
          {productsState.products?.length > 0 &&
            productsState.products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            href={``}
            className={`flex flex-row items-center w-fit gap-2 px-6 py-2 border-t border-teal-950 text-teal-950`}
          >
            <h6 className="h6-mono">View all</h6>
            <i className="icon-24">
              <BsArrowRight />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
