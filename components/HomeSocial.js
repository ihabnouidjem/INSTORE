import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function HomeSocial() {
  const social = useSelector((state) => state.social.social);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-16 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
        <h3 className="h3">SOCIAL</h3>
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
      </div>
      <div className="w-[min(1500px,100%)] grid grid-cols-repeatPHNPosts sm:grid-cols-repeatTABPosts xl:grid-cols-repeatPosts gap-3 sm:gap-6">
        {social?.length &&
          social.map(({ _id, url, image, description }) => {
            return (
              <Link
                key={_id}
                href={url}
                className="w-full aspect-square grid grid-cols-1fr grid-rows-1fr"
              >
                <Image
                  className="col-12 z-0 row-12 w-full h-full flex items-center justify-center object-cover rounded-sm"
                  src={image}
                  height={500}
                  width={500}
                  alt="POST img"
                />
                <div className="w-full col-12 row-12 z-10 flex flex-row items-cneter justify-between gap-2 text-zinc-50 p-4">
                  <h6 className="h6 w-[calc(100%-32px)] max-h-full overflow-hidden">
                    {description && description}
                  </h6>
                  <i className="icon-24">
                    <BsFillSuitHeartFill />
                  </i>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default HomeSocial;
