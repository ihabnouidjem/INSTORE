import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDown, BsSearch, BsHandbag } from "react-icons/bs";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-zinc-900 flex items-center justify-center h-[56px] px-[12px] sm:px-[32px]">
        <div className="flex flex-row items-center justify-center w-[min(1500px,100%)] gap-4">
          <p className="h6 text-zinc-50">
            {"GET 20% OFF YOUR 1ST PURCHASE WITH PROMO CODE"}
          </p>
          <div className="px-2 py-1 border-2 border-zinc-50 rounded-sm">
            <p className="h5 text-zinc-50">{"INSTORE23"}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-teal-950 sticky top-0 left-0 z-50 h-[64px] px-[12px] sm:px-[32px]">
        <div className="w-[min(1500px,100%)] h-full flex flex-row items-center justify-between">
          <div className="h-full flex flex-row items-center xl:px-3 xl:hidden">
            <i className="icon-20 text-zinc-50">
              <RxHamburgerMenu />
            </i>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
              <Image
                className="w-full h-full flex items-center justify-center object-contain"
                src={"/icons/white.svg"}
                height={500}
                width={500}
                alt="icon"
              ></Image>
            </div>
            <h1 className="h1 text-zinc-50">.STORE</h1>
          </div>
          <div className="h-full flex flex-row items-center">
            <nav className="h-full  flex-row items-center hidden xl:flex">
              <Link
                href="/"
                className="flex flex-row items-center h-full text-zinc-50 px-2"
              >
                <h6 className="h6">HOME</h6>
              </Link>
              <Link
                href={`/products`}
                className="flex flex-row items-center text-zinc-50 gap-[2px] h-full  px-2"
              >
                <h6 className="h6">STORE</h6>
                {/* <i className="icon-20">
                  <BsChevronDown />
                </i> */}
              </Link>
              <Link
                href={`/products/categories/watch`}
                className="flex flex-row items-center text-zinc-50 gap-[2px] h-full  px-2"
              >
                <h6 className="h6">WATCHES</h6>
                {/* <i className="icon-20">
                  <BsChevronDown />
                </i> */}
              </Link>
              <Link
                href={`/products/categories/strap`}
                className="flex flex-row items-center text-zinc-50 gap-[2px] h-full  px-2"
              >
                <h6 className="h6">STRAPS</h6>
                {/* <i className="icon-20">
                  <BsChevronDown />
                </i> */}
              </Link>
              <Link
                href={`/products/categories/accessory`}
                className="flex flex-row items-center text-zinc-50 gap-[2px] h-full  px-2"
              >
                <h6 className="h6">ACCESSORIES</h6>
                {/* <i className="icon-20">
                  <BsChevronDown />
                </i> */}
              </Link>
              <Link
                href={`/contact`}
                className="flex flex-row items-center text-zinc-50 gap-[2px] h-full  px-2"
              >
                <h6 className="h6">CONTACT</h6>
                {/* <i className="icon-20">
                  <BsChevronDown />
                </i> */}
              </Link>
              <Link
                href={`/about`}
                className="flex flex-row items-center h-full text-zinc-50 px-2"
              >
                <h6 className="h6">ABOUT</h6>
              </Link>
            </nav>
            <div className="h-full flex flex-row items-center">
              <button className="flex-row items-center text-zinc-50 h-full px-3 hidden xl:flex ">
                <h6 className="h6-bold">EN</h6>
              </button>
              <button className="flex-row items-center text-zinc-50 h-full px-3 hidden xl:flex ">
                <i className="icon-20">
                  <BsSearch />
                </i>
              </button>
              <Link
                href={`/cart`}
                className="flex flex-row items-center text-zinc-50 h-full xl:px-3"
              >
                <i className="icon-20">
                  <BsHandbag />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
