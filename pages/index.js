import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeAcknowledgments from "@/components/HomeAcknowledgments";
import Ads from "@/components/Ads";
import HomeBrands from "@/components/HomeBrands";
import HomeFAQ from "@/components/HomeFAQ";
import HomeProducts from "@/components/HomeProducts";
import HomeSocial from "@/components/HomeSocial";
import SubMailList from "@/components/SubMailList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/features/productsSlice";
import { setBrands } from "@/features/brandsSlice";
import { setAds } from "@/features/adsSlice";
import { setSocial } from "@/features/socialSlice";
import { setFAQ } from "@/features/FAQSlice";
import { useSession } from "next-auth/react";

function Home({ products, brands, ads, social, FAQ }) {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [products]);

  useEffect(() => {
    if (brands) {
      dispatch(setBrands(brands));
    }
  }, [brands]);

  useEffect(() => {
    if (ads) {
      dispatch(setAds(ads));
    }
  }, [ads]);

  useEffect(() => {
    if (social) {
      dispatch(setSocial(social));
    }
  }, [social]);

  useEffect(() => {
    if (FAQ) {
      dispatch(setFAQ(FAQ));
    }
  }, [FAQ]);

  return (
    <div className="w-full bg-zinc-50">
      <Banner />
      <HomeProducts />
      <HomeBrands />
      <Ads />
      <HomeSocial />
      {/* <HomeAcknowledgments /> */}
      <HomeFAQ />
      <SubMailList />
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const products = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/products`
  ).then((data) => data.json());

  const brands = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/brands`
  ).then((data) => data.json());

  const ads = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/ads`
  ).then((data) => data.json());

  const social = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/social`
  ).then((data) => data.json());

  const FAQ = fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://instore.vercel.app"
        : process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/FAQ`
  ).then((data) => data.json());

  const data = await Promise.all([products, brands, ads, social, FAQ]);

  return {
    props: {
      products: data[0],
      brands: data[1],
      ads: data[2],
      social: data[3],
      FAQ: data[4],
    },
  };
}
