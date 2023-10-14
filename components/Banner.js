import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="w-full grid grid-rows-1fr grid-cols-1fr h-[256px] sm:h-[500px]">
      <div className="w-full flex items-center justify-center col-12 row-12 h-[256px] sm:h-[500px]">
        <Image
          className="w-full h-full flex items-center justify-center object-cover"
          src={"/uploads/banner.jpg"}
          height={500}
          width={2000}
          alt="banner"
        />
      </div>
      <div className="w-full flex justify-center col-12 row-12 z-1 h-[256px] sm:h-[500px] px-3 sm:px-8">
        <div className="w-[min(1500px,100%)] h-full flex flex-col gap-[24px] justify-center z-[2]">
          <h2 className="w-[min(800px,100%)] h2 text-zinc-50">{`Captivating Chronometry: the Epitome of Elegence`}</h2>
          <p className="w-[min(800px,100%)] p text-zinc-300 hidden sm:block">{`We take great pride in curating and delivering the finest selection of exquisite watches and accessories, with timeless elegence and precision`}</p>
          <Link
            href="/products"
            className="bg-zinc-50 w-fit text-zinc-900 px-6 py-2 rounded-sm"
          >
            <h5 className="h5">SHOP NOW</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
