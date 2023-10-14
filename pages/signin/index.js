import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import SignIn from "@/components/SignIn";
import { useState, useEffect } from "react";

export default function SignInPage({ providers }) {
  const [myProviders, setMyProviders] = useState([]);

  const getClientProviders = async () => {
    const providers = await getProviders();
    return providers;
  };

  useEffect(() => {
    if (providers) {
      setMyProviders(providers);
    } else {
      setMyProviders({
        google: {
          id: "google",
          name: "Google",
          type: "oauth",
          signinUrl: "https://instore-eta.vercel.app/api/auth/signin/google",
          callbackUrl:
            "https://instore-eta.vercel.app/api/auth/callback/google",
        },
        facebook: {
          id: "facebook",
          name: "Facebook",
          type: "oauth",
          signinUrl: "https://instore-eta.vercel.app/api/auth/signin/facebook",
          callbackUrl:
            "https://instore-eta.vercel.app/api/auth/callback/facebook",
        },
      });
    }
  }, [providers]);

  return (
    <div className="grid grid-rows-1fr grid-cols-1fr w-full h-screen bg-zinc-50 u-scrollbar-hidden">
      <div className="col-12 row-12 z-0 flex justify-end w-full u-scrollbar-hidden">
        <div className="w-[100%] md:w-[50%] h-full grid grid-cols-1fr grid-row-1fr">
          <Image
            className="col-12 row-12 z-0 w-full h-full flex items-center justify-center object-cover"
            src={`/uploads/ai-login.jpg`}
            alt={`login image`}
            height={2000}
            width={2000}
          />
          <div className="w-full h-full bg-black-70 md:bg-black-30 col-12 row-12 z-[1]"></div>
        </div>
      </div>
      <div className="w-full h-full col-12 row-12 z-10 flex flex-col u-scrollbar-hidden">
        <div className="w-full h-14 md:h-[80px] flex flex-row items-center justify-end px-3 md:px-8">
          <i className="icon-24 text-zinc-50">
            <BsXLg />
          </i>
        </div>
        <div className="w-full flex flex-row items-start justify-around gap-16 px-3 py-8 md:gap-16 md:px-8 md:py-8 xl:gap-64 xl:px-32 xl:py-16 ">
          <div className="w-[min(500px,100%)]">
            <SignIn providers={myProviders} />
          </div>
          <div className="w-[min(500px,100%)] md:flex flex-col gap-12 hidden">
            <h2 className="h2 text-zinc-50">
              {`Captivating Chronometry: the Epitome of Elegence`}
            </h2>
            <p className="p text-zinc-100">
              {`We take great pride in curating and delivering the finest selection of exquisite watches and accessories, with timeless elegence and precision`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/cart" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
