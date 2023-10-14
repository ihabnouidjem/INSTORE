import React, { useState } from "react";

function OrderCard({ order }) {
  const [orderState, setOrderState] = useState({ status: "hidden" });
  return (
    <div
      className="w-full flex flex-col px-[4px] py-[4px] rounded-md bg-zinc-100"
      onClick={() => {
        if (orderState.status === "showcase") {
          setOrderState({ ...orderState, status: "hidden" });
        } else {
          setOrderState({ ...orderState, status: "showcase" });
        }
      }}
    >
      <div className="w-full flex flex-row items-center">
        <h5 className="h5 text-zinc-900">
          {order.time &&
            `${order.time.date}-${order.time.month}-${order.time.year}`}
        </h5>
        <h3 className="h3 text-teal-900 ml-auto">
          {order.total && order.total}
        </h3>
      </div>
      {orderState.status === "showcase" && (
        <>
          <div className="w-full flex flex-row items-center gap-2">
            <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">{`BRND`}</h6>
            <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">{`PRDCT`}</h6>
            <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">{`QNTTY`}</h6>
            <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">{`PRCE`}</h6>
          </div>
          <div className="w-full flex flex-col items-center gap-[4px] border-t border-zinc-400">
            {order.products?.length > 0 &&
              order.products?.map((product) => {
                return (
                  <div key={product.pid} className="w-full flex flex-row gap-2">
                    <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">
                      {product.brand && product.brand}
                    </h6>
                    <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">
                      {product.name && product.name}
                    </h6>
                    <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">
                      {product.quantity && product.quantity}
                    </h6>
                    <h6 className="w-[calc(25%-6px)] h6 text-zinc-800">
                      {product.price && product.price}
                    </h6>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default OrderCard;
