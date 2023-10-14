import Image from "next/image";
import React from "react";

function HomeAcknowledgments() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-16 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] text-zinc-900 flex flex-row items-center justify-center gap-3 sm:gap-8">
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
        <h3 className="h3">REVIEWS</h3>
        <div className="h-[1px] rounded-full bg-zinc-900 w-[140px] sm:w-[200px]"></div>
      </div>
      <div className="w-[min(1500px,100%)] grid grid-rows-1fr bg-transparent gap-6 u-scrollbar-hidden">
        {/* <div className="w-fit flex flex-row items-center gap-6"> */}
        <div className="w-[400px] row-12 flex flex-col items-center gap-3 p-3 bg-white rounded-sm shadow-review ">
          <Image
            className="h-24 w-24 flex items-center justify-center object-cover rounded-full"
            src={`/uploads/images.jpeg`}
            height={400}
            width={400}
            alt="PROFILE img"
          />
          <h5 className="h5 text-zinc-900 w-full text-center">{`@Sophia_bennett`}</h5>
          <p className="p text-zinc-800 w-full text-center">
            {`An unforgettable Shopping Experience!
                I recently had the pleasure of visiting IN.STORE, and i must say, it left a lasting impression on me. From the moment i stepped in. I was greeted by friendly and attentive staff who made me feel welcome and valued as a customer.`}
          </p>
        </div>
        <div className="w-[400px] row-12 z-10 flex flex-col items-center gap-3 p-3 bg-white rounded-sm shadow-reviewSHDW ">
          <Image
            className="h-24 w-24 flex items-center justify-center object-cover rounded-full"
            src={`/uploads/images.jpeg`}
            height={400}
            width={400}
            alt="PROFILE img"
          />
          <h5 className="h5 text-zinc-900 w-full text-center">{`@Sophia_bennett`}</h5>
          <p className="p text-zinc-800 w-full text-center">
            {`An unforgettable Shopping Experience!
                I recently had the pleasure of visiting IN.STORE, and i must say, it left a lasting impression on me. From the moment i stepped in. I was greeted by friendly and attentive staff who made me feel welcome and valued as a customer.`}
          </p>
        </div>
        <div className="w-[400px] row-12 z-10 flex flex-col items-center gap-3 p-3 bg-white rounded-sm shadow-reviewSHDW ">
          <Image
            className="h-24 w-24 flex items-center justify-center object-cover rounded-full"
            src={`/uploads/images.jpeg`}
            height={400}
            width={400}
            alt="PROFILE img"
          />
          <h5 className="h5 text-zinc-900 w-full text-center">{`@Sophia_bennett`}</h5>
          <p className="p text-zinc-800 w-full text-center">
            {`An unforgettable Shopping Experience!
                I recently had the pleasure of visiting IN.STORE, and i must say, it left a lasting impression on me. From the moment i stepped in. I was greeted by friendly and attentive staff who made me feel welcome and valued as a customer.`}
          </p>
        </div>
        <div className="w-[400px] row-12 z-10 flex flex-col items-center gap-3 p-3 bg-white rounded-sm shadow-reviewSHDW ">
          <Image
            className="h-24 w-24 flex items-center justify-center object-cover rounded-full"
            src={`/uploads/images.jpeg`}
            height={400}
            width={400}
            alt="PROFILE img"
          />
          <h5 className="h5 text-zinc-900 w-full text-center">{`@Sophia_bennett`}</h5>
          <p className="p text-zinc-800 w-full text-center">
            {`An unforgettable Shopping Experience!
                I recently had the pleasure of visiting IN.STORE, and i must say, it left a lasting impression on me. From the moment i stepped in. I was greeted by friendly and attentive staff who made me feel welcome and valued as a customer.`}
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HomeAcknowledgments;
