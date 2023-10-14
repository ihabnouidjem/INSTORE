import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Ads() {
  const ads = useSelector((state) => state.ads.ads);
  const [adsState, setAdsState] = useState({
    ads: [],
    adNumber: 0,
    adChanged: false,
  });

  useEffect(() => {
    if (ads?.length === 1) {
      setAdsState({ ...adsState, ads: ads[0] });
    }

    if (ads?.length > 1 && !adsState.adChanged) {
      if (adsState.adNumber === ads.length - 1) {
        setAdsState({
          ...adsState,
          ads: [ads[adsState.adNumber], ads[0]],
          adChanged: true,
        });
      } else {
        setAdsState({
          ...adsState,
          ads: [ads[adsState.adNumber], ads[adsState.adNumber + 1]],
          adChanged: true,
        });
      }
    }
    if (adsState.adChanged) {
      const interval = setInterval(() => {
        if (adsState.adNumber === ads.length - 1) {
          setAdsState({ ...adsState, adNumber: 0, adChanged: false });
        } else {
          setAdsState({
            ...adsState,
            adNumber: adsState.adNumber + 1,
            adChanged: false,
          });
        }
        return clearInterval(interval);
      }, 4000);
    }
  }, [ads, adsState]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-8 px-3 sm:px-8">
      <div className="w-[min(1500px,100%)] rounded-sm  overflow-hidden">
        <div className="w-[calc(200%+8px)] grid grid-cols-repAuto grid-rows-1fr gap-2 relative ">
          {/* animate-slideAds */}
          {adsState.ads?.map((ad) => {
            return (
              <Link
                key={ad._id}
                href={ad.url ? ad.url : "/"}
                className={`w-[min(1500px,100%)] row-12`}
              >
                <Image
                  className="w-[min(1500px,100%)] rounded-sm"
                  src={ad?.image}
                  width={1500}
                  height={400}
                  alt={`advertisement`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-[min(1500px,100%)] flex flex-row items-center justify-center gap-2 ">
        {ads?.map((ad, index) => {
          return (
            <button
              key={ad?._id}
              className={`h-[8px] rounded-full transition duration-300 ${
                adsState.adNumber === index
                  ? "w-8 bg-teal-800"
                  : "w-2 bg-zinc-300"
              }`}
              // onClick={() => {
              //   if (index === ads.length - 1) {
              //     setAdsState({
              //       ...adsState,
              //       ads: [ads[index], ads[0]],
              //       adNumber: index,
              //       adChanged: true,
              //     });
              //   } else {
              //     setAdsState({
              //       ...adsState,
              //       ads: [ads[index], ads[index + 1]],
              //       adNumber: index,
              //       adChanged: true,
              //     });
              //   }
              // }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Ads;
