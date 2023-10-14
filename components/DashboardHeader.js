import React from "react";
import { BsCalendarWeek, BsChevronDown } from "react-icons/bs";

function DashboardHeader() {
  return (
    <div className="flex flex-row justify-between items-center w-full min-h-[80px] h-[80px] sm:min-h-[112px] sm:h-[112px]">
      <h2 className="h2 text-zinc-900">Dashboard</h2>
      <div className="flex flex-row items-center gap-[2px] text-zinc-900">
        <i className="icon-20">
          <BsCalendarWeek />
        </i>
        <h6 className="h6">Last month</h6>
        <button>
          <i className="icon-20">
            <BsChevronDown />
          </i>
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader;
