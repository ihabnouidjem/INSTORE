import Image from "next/image";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiSolidNetworkChart } from "react-icons/bi";
import { BsBoxSeam, BsChat, BsStar, BsStopwatch } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

function DashboardNav() {
  return (
    <div className="w-[min(300px,100%)] sm:w-[320px] h-full border-r border-zinc-600 px-3 flex flex-col overflow-x-hidden overflow-y-scroll u-scrollbar-hidden ">
      <div className="flex flex-row items-center w-full min-h-[80px] h-[80px] sm:min-h-[112px] sm:h-[112px] px-3">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <Image
            className="w-full h-full flex items-center justify-center object-contain"
            src={"/icons/black.svg"}
            height={500}
            width={500}
            alt="icon"
          ></Image>
        </div>
        <h1 className="h1 text-zinc-900">.STORE</h1>
      </div>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-900 text-zinc-50">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <AiOutlineDashboard />
          </i>
        </div>
        <h5 className="h5">Dashboard</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <FaPeopleGroup />
          </i>
        </div>
        <h5 className="h5">Clients</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <BsChat />
          </i>
        </div>
        <h5 className="h5">Messages</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <BsBoxSeam />
          </i>
        </div>
        <h5 className="h5">Products</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <BsStopwatch />
          </i>
        </div>
        <h5 className="h5">Brands</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <RiAdvertisementLine />
          </i>
        </div>
        <h5 className="h5">Ads</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <BiSolidNetworkChart />
          </i>
        </div>
        <h5 className="h5">Social</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <BsStar />
          </i>
        </div>
        <h5 className="h5">Reviews</h5>
      </button>
      <button className="w-full flex flex-row items-center p-3 gap-3 rounded-xl bg-zinc-50 text-zinc-900 mt-auto">
        <div className="flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <i className="icon-24">
            <FiSettings />
          </i>
        </div>
        <h5 className="h5">Settings</h5>
      </button>
    </div>
  );
}

export default DashboardNav;
