import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-16 px-3 sm:px-8 bg-zinc-900">
      <div className="w-[min(1500px,100%)] flex flex-row flex-wrap xl:flex-nowrap gap-12 sm:gap-16">
        {""}

        {""}
        <div className="w-full sm:w-[calc(50%-32px)] xl:w-[540px] flex flex-col gap-4">
          <h6 className="h6 text-zinc-50">IN.STORE</h6>
          <div className="w-full px-2 flex flex-col gap-2">
            <Link href={`/products/types/men`}>
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Men
              </p>
            </Link>
            <Link href={`/products/types/women`}>
              {" "}
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Women
              </p>
            </Link>
            <Link href={`/products/types/kids`}>
              {" "}
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Kids
              </p>
            </Link>
            <Link href={`/products/categories/watch`}>
              {" "}
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Watches
              </p>
            </Link>
            <Link href={`/products/categories/strap`}>
              {" "}
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Straps
              </p>
            </Link>
            <Link href={`/products/categories/accessory`}>
              {" "}
              <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
                Accessories
              </p>
            </Link>
          </div>
        </div>
        {""}
        <div className="w-full sm:w-[calc(50%-32px)] xl:w-[540px] flex flex-col gap-4">
          <h6 className="h6 text-zinc-50">TINDOUF</h6>
          <div className="w-full px-2 flex flex-col gap-2">
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`32 Woodsman RoadWenatchee, WA 98801`}
            </p>{" "}
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`Algeria, Tindouf`}
            </p>{" "}
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`ihabnouidjem@instore.com`}
            </p>{" "}
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`Tel: 0699608119`}
            </p>{" "}
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`Fax: 04123654`}
            </p>{" "}
            <p className="w-full p text-zinc-300 hover:text-zinc-50 duration-300">
              {`Working houres: 8:00AM - 5:00PM Sunday - Tursday`}
            </p>
          </div>
        </div>
        {""}
        <div className="w-full flex flex-col gap-6">
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
          <div className="w-full flex flex-row items-center justify-between gap-2 py-6 border-b border-t border-zinc-600">
            <h6 className="h6 text-zinc-50">SOCIAL</h6>
            <div className="flex flex-row items-center gap-4">
              <i className="icon-24 text-zinc-300 hover:text-zinc-50 duration-300">
                <FaTiktok />
              </i>
              <i className="icon-24 text-zinc-300 hover:text-zinc-50 duration-300">
                <BsFacebook />
              </i>
              <i className="icon-24 text-zinc-300 hover:text-zinc-50 duration-300">
                <BsInstagram />
              </i>
              <i className="icon-24 text-zinc-300 hover:text-zinc-50 duration-300">
                <BsTwitter />
              </i>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-center gap-2">
            <div className="flex flex-row items-center whitespace-nowrap gap-[2px] text-zinc-300">
              <p className="p">Copyright</p>
              <i className="icon-20">
                <AiOutlineCopyrightCircle />
              </i>
              <p className="p">2023 IN.STORE</p>
            </div>
            <p className="p text-zinc-300 whitespace-nowrap ml-auto">
              {`Credits : `}
              <span className="h5 text-zinc-50">
                <Link href="https://ihabnouidjem.com">ihabnouidjem</Link>
              </span>
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-4">
            <button className="">
              <p className="h6-bold font-semibold text-zinc-50">EN</p>
            </button>
            <button className="">
              <p className="h6 text-zinc-300">FR</p>
            </button>
            <button className="">
              <p className="h6 text-zinc-300">AR</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
