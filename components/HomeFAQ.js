import React from "react";
import FAQQst from "./FAQQst";
import { useSelector } from "react-redux";

function HomeFAQ() {
  const FAQ = useSelector((state) => state.FAQ.FAQ);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-16 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
        <h3 className="h3">FAQ</h3>
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
      </div>
      <div className="w-[min(1500px,100%)] flex flex-col items-center">
        {FAQ?.length > 0 &&
          FAQ.map((qst) => {
            return <FAQQst key={qst._id} qst={qst} />;
          })}
      </div>
    </div>
  );
}

export default HomeFAQ;
