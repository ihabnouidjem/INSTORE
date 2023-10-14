import React from "react";
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
import DashboardHeader from "./DashboardHeader";

function DashboardApp() {
  return (
    <div className="w-full h-full flex flex-col px-3">
      <DashboardHeader />
      <div className="w-full flex flex-wrap gap-6">
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-teal-900">
          <div className="w-full">
            <h5 className="h5 text-zinc-50">Total revenue</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-50">30M DZD</h3>
            <div className="flex flex-row items-center gap-[2px] text-zinc-50">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">3M DZD</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Sessions</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">1423</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">120</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Products view</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">2312</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">354</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Liked</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">1637</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">39</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Favorited</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">403</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">7</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Added to cart</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">589</h3>
            <div className="flex flex-row items-center gap-[2px] text-red-600">
              <i className="icon-20">
                <BiLineChartDown />
              </i>
              <h6 className="h6">-24</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Purchased</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">398</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">20</h6>
            </div>
          </div>
        </div>
        {""}
        <div className="w-[calc(25%-18px)] shadow-lg p-3 rounded-xl flex flex-col gap-[2px] bg-zinc-50">
          <div className="w-full">
            <h5 className="h5 text-zinc-900">Returned</h5>
          </div>
          <div className="w-full flex flex-row items-end justify-between">
            <h3 className="h3 text-zinc-900">3</h3>
            <div className="flex flex-row items-center gap-[2px] text-teal-900">
              <i className="icon-20">
                <BiLineChart />
              </i>
              <h6 className="h6">-3</h6>
            </div>
          </div>
        </div>
        {""}
      </div>
    </div>
  );
}

export default DashboardApp;
