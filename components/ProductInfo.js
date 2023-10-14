import React from "react";
import { useSelector } from "react-redux";

function ProductInfo() {
  const product = useSelector((state) => state.products.product);

  return (
    <div className="w-full flex flex-col items-center gap-3 px-3 sm:px-8 py-8">
      {product && (
        <>
          <div className="w-[min(1500px,100%)] ">
            <h2 className="h2 text-zinc-900">{product.headline}</h2>
          </div>
          <div className="w-[min(1500px,100%)] ">
            <p className="p text-zinc-800">{`The silence hovering over the outskirts of Le Mans has been eerie these last two years. Anyone familiar with the world’s most iconic historic racing event will know that every second July, the whole town vibrates to the sound of scorched tarmac in the distance. The legendary race, Le Mans Classic will not only return in 2022, but exceptionally will also be held the next year as well. Indeed, 2023 will mark the centenary of the very first race on the Le Mans 24 Hours track.`}</p>
          </div>
          <div className="w-[min(1500px,100%)] flex flex-col gap-2 py-6">
            {product.props?.length > 0 &&
              product.props.map((prop, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col sm:flex-row gap-2"
                  >
                    <div className="w-full sm:w-[30%]">
                      <h5 className="h5 text-zinc-900">{prop.name}</h5>
                    </div>
                    <div className="min-h-[1px] w-[calc(100%-4px)]  sm:min-h-[100%] sm:w-[1px] rounded-full bg-zinc-600">
                      {""}
                    </div>
                    <div className="w-full sm:w-[calc(70%-17px)]">
                      <p className="p text-zinc-900">{prop.prop}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductInfo;
