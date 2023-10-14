import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";

function SignIn({ providers }) {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      {""}
      <div className="w-full flex flex-row items-center">
        <div className="hidden md:flex items-center justify-center w-[42px] h-[42px] xl:w-[50px] xl:h-[50px]">
          <Image
            className="w-full h-full flex items-center justify-center object-contain"
            src={"/icons/teal.svg"}
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
        <h2 className="w-full h2 text-zinc-50 md:text-zinc-900">{`Sign in to your account`}</h2>
        <p className="w-full p text-zinc-100 md:text-zinc-800">
          {`Welcome back! please enter you credentials to log in:`}
        </p>
      </div>
      {""}
      <div className="w-full flex flex-row flex-wrap gap-3">
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              className="flex flex-row items-center px-3 py-2 rounded-lg border w-[calc(50%-6px)] bg-zinc-50 md:border-zinc-400 gap-3"
              key={provider.name}
              onClick={() => signIn(provider.id)}
            >
              <i className="icon-24 text-blue-600">
                {provider.name === "Google" ? (
                  <FcGoogle />
                ) : (
                  provider.name === "Facebook" && <BsFacebook />
                )}
              </i>
              <p className="p text-zinc-900">{provider.name}</p>
            </button>
          ))}
      </div>
      {""}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row items-center gap-2">
          <div className="w-full h-[1px] rounded-full bg-zinc-100 md:bg-zinc-400"></div>
          <p className="p text-zinc-100 md:text-zinc-800 whitespace-nowrap">
            {`Or sign in with email`}
          </p>
          <div className="w-full h-[1px] rounded-full bg-zinc-100 md:bg-zinc-400"></div>
        </div>

        <div className="w-full h-14 flex flex-row items-center gap-2 px-3 rounded-xl bg-zinc-50 border md:border-zinc-400">
          <i className="icon-24 md:text-zinc-800">
            <HiOutlineMail />
          </i>
          <input
            className="w-full h-full bg-transparent p md:text-zinc-800"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="w-full h-14 flex flex-row items-center gap-2 px-3 rounded-xl bg-zinc-50 border md:border-zinc-400">
          <i className="icon-24 md:text-zinc-800">
            <HiOutlineLockClosed />
          </i>
          <input
            className="w-full h-full bg-transparent p md:text-zinc-800"
            type="password"
            placeholder="Password"
          />
          <i className="icon-24 md:text-zinc-800">
            <HiOutlineEyeSlash />
          </i>
        </div>
      </div>
      {""}
      <button className="w-full flex items-center justify-center py-3 rounded-xl bg-zinc-50 md:bg-gradient-to-br md:from-sky-950 md:to-teal-950">
        <h6 className="h6 text-teal-950 md:text-zinc-50">Sign in</h6>
      </button>
    </div>
  );
}

export default SignIn;
