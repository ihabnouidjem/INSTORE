import DashboardApp from "@/components/DashboardApp";
import DashboardNav from "@/components/DashboardNav";
import React from "react";

function dashboard() {
  return (
    <div className="w-full h-screen bg-zinc-50 flex flex-row">
      <DashboardNav />
      <DashboardApp />
    </div>
  );
}

export default dashboard;
