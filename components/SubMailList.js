import React from "react";

function SubMailList() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-16 px-3 sm:px-8 bg-zinc-300">
      <div className="w-[min(1500px,100%)] text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
        <h4 className="h4 w-full text-center">SUBSCRIBE TO OUR MAILING LIST</h4>
      </div>
      <div className="h-12 w-[min(800px,95%)] px-2 border-b border-zinc-800">
        <input
          type="email"
          placeholder="Enter email address"
          className="h-full w-full border-0 outline-none bg-transparent text-center"
        />
      </div>
      <button className="px-6 py-2 rounded-full border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-300 duration-300">
        <h5 className="h5">Subscribe</h5>
      </button>
    </div>
  );
}

export default SubMailList;
