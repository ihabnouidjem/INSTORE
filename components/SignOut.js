import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function SignOut() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center gap-12">
      {""}
      <div className="w-full flex flex-row items-center">
        <div className="hidden md:flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <Image
            className="w-full h-full flex items-center justify-center object-contain"
            src={"/icons/black.svg"}
            height={500}
            width={500}
            alt="icon"
          ></Image>
        </div>
        <div className="flex md:hidden items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <Image
            className="w-full h-full flex items-center justify-center object-contain"
            src={"/icons/white.svg"}
            height={500}
            width={500}
            alt="icon"
          ></Image>
        </div>
        <h1 className="h1 text-zinc-50 md:text-teal-900">.STORE</h1>
      </div>
      {""}
      <div className="w-full flex flex-col gap-2">
        <h2 className="w-full h2 text-zinc-50 md:text-zinc-900">{`Thank you for visiting!`}</h2>
        <p className="w-full p text-zinc-100 md:text-zinc-800">
          {`We look forward to welcoming you back again soon. don't hesitate to visit us again!`}
        </p>
      </div>
      {""}
      <button
        className="w-full flex items-center justify-center py-3 rounded-xl bg-zinc-50 md:bg-gradient-to-br md:from-sky-950 md:to-teal-950"
        onClick={() =>
          signOut({ redirect: false }).then(() => {
            router.push("/");
          })
        }
      >
        <h6 className="h6 text-teal-950 md:text-zinc-50">Sign out</h6>
      </button>
    </div>
  );
}

export default SignOut;
