import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function HomeBrands() {
  const brands = useSelector((state) => state.brands.brands);

  return (
    <div className="w-full flex flex-col items-center gap-6 py-16 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
        <h3 className="h3">BRANDS</h3>
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
      </div>
      <div className="w-[min(1500px,100%)] grid grid-cols-repeatBrands gap-3 sm:gap-6">
        {brands?.length > 0 &&
          brands.map(({ _id, image }) => {
            return (
              <div
                key={_id}
                className="w-full h-[100px] p-3 rounded-lg sm:rounded-xl bg-zinc-300"
              >
                <Image
                  className="h-full w-full flex items-center justify-center object-contain"
                  src={image}
                  height={500}
                  width={500}
                  alt="BRAND img"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomeBrands;
