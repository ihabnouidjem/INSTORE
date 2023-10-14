import {
  setFilter,
  setMyProducts,
  setProducts,
  setSearch,
} from "@/features/productsSlice";
import { appState } from "@/pages/_app";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

function ProductsFilter() {
  const { filterProducts, getProducts } = useContext(appState);
  const [filterState, setFilterState] = useState({
    buttons: {
      all: true,
      men: true,
      women: true,
      boys: true,
      girls: true,
      watches: true,
      straps: true,
      accessories: true,
      apply: false,
    },
    filter: [
      { type: { gender: "male", age: "adult" } },
      { type: { gender: "female", age: "adult" } },
      { type: { gender: "male", age: "kid" } },
      { type: { gender: "female", age: "kid" } },
      { category: "watch" },
      { category: "strap" },
      { category: "accessory" },
    ],
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const search = useSelector((state) => state.products.search);
  const products = useSelector((state) => state.products.products);
  const myProducts = useSelector((state) => state.products.myProducts);

  const searchProducts = () => {
    if (search && search !== "") {
      axios
        .get(
          `${
            process.env.NODE_ENV === "production"
              ? "https://instore.vercel.app"
              : process.env.NODE_ENV === "development" &&
                "http://localhost:3000"
          }/api/products/${search}`
        )
        .then((res) => {
          dispatch(setMyProducts(res.data));
        });
    }
  };

  useEffect(() => {
    if (["/products/categories/watch"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: false,
          women: false,
          boys: false,
          girls: false,
          watches: true,
          straps: false,
          accessories: false,
          apply: false,
        },
        filter: [{ category: "watch" }],
      });
      dispatch(setFilter([{ category: "watch" }]));
    } else if (["/products/categories/strap"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: false,
          women: false,
          boys: false,
          girls: false,
          watches: false,
          straps: true,
          accessories: false,
          apply: false,
        },
        filter: [{ category: "strap" }],
      });
      dispatch(setFilter([{ category: "strap" }]));
    } else if (["/products/categories/accessory"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: false,
          women: false,
          boys: false,
          girls: false,
          watches: false,
          straps: false,
          accessories: true,
          apply: false,
        },
        filter: [{ category: "accessory" }],
      });
      dispatch(setFilter([{ category: "accessory" }]));
    } else if (["/products/types/men"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: true,
          women: false,
          boys: false,
          girls: false,
          watches: false,
          straps: false,
          accessories: false,
          apply: false,
        },
        filter: [{ type: { gender: "male", age: "adult" } }],
      });
      dispatch(setFilter([{ type: { gender: "male", age: "adult" } }]));
    } else if (["/products/types/women"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: false,
          women: true,
          boys: false,
          girls: false,
          watches: false,
          straps: false,
          accessories: false,
          apply: false,
        },
        filter: [{ type: { gender: "female", age: "adult" } }],
      });
      dispatch(setFilter([{ type: { gender: "female", age: "adult" } }]));
    } else if (["/products/types/kids"].includes(router.asPath)) {
      setFilterState({
        ...filterState,
        buttons: {
          all: false,
          men: false,
          women: false,
          boys: true,
          girls: true,
          watches: false,
          straps: false,
          accessories: false,
          apply: false,
        },
        filter: [
          { type: { gender: "male", age: "kid" } },
          { type: { gender: "female", age: "kid" } },
        ],
      });
      dispatch(
        setFilter([
          { type: { gender: "male", age: "kid" } },
          { type: { gender: "female", age: "kid" } },
        ])
      );
    }
  }, [router.asPath]);

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center bg-zinc-100 py-8 px-3 sm:px-8">
      <div className="w-[min(100%,1500px)] flex flex-row items-center gap-3 sm:gap-6">
        <h2 className="h2 text-zinc-900">Filters</h2>
        <div className="w-full h-12 rounded-full border border-zinc-900 flex flex-row items-center p-3">
          <input
            className="border-none outline-none h-full w-full bg-transparent text-zinc-900"
            type="text"
            placeholder="Search products"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
          <i
            className="icon-24 text-zinc-900"
            onClick={() => {
              searchProducts();
            }}
          >
            <RiSearch2Line />
          </i>
        </div>
      </div>
      <div className="w-[min(100%,1500px)] flex gap-1 flex-row items-center justify-center flex-wrap ">
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.all
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.all) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  men: false,
                  women: false,
                  boys: false,
                  girls: false,
                  watches: false,
                  straps: false,
                  accessories: false,
                  apply: true,
                },
                filter: [],
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: true,
                  men: true,
                  women: true,
                  boys: true,
                  girls: true,
                  watches: true,
                  straps: true,
                  accessories: true,
                  apply: true,
                },
                filter: [
                  { type: { gender: "male", age: "adult" } },
                  { type: { gender: "female", age: "adult" } },
                  { type: { gender: "male", age: "kid" } },
                  { type: { gender: "female", age: "kid" } },
                  { category: "watch" },
                  { category: "strap" },
                  { category: "accessory" },
                ],
              });
            }
          }}
        >
          <h6 className="h6 ">All</h6>
        </button>
        {``}
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.men
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={async () => {
            if (filterState.buttons.men) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  men: false,
                  apply: true,
                },
                filter: filterState.filter.filter((filter) => {
                  return !(
                    filter.type?.gender === "male" &&
                    filter.type?.age === "adult"
                  );
                }),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, men: true, apply: true },
                filter: [
                  ...filterState.filter,
                  { type: { gender: "male", age: "adult" } },
                ],
              });
            }
          }}
        >
          <h6 className="h6 ">Men</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.women
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.women) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  women: false,
                  apply: true,
                },
                filter: filterState.filter.filter((filter) => {
                  return !(
                    filter.type?.gender === "female" &&
                    filter.type?.age === "adult"
                  );
                }),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, women: true, apply: true },
                filter: [
                  ...filterState.filter,
                  { type: { gender: "female", age: "adult" } },
                ],
              });
            }
          }}
        >
          <h6 className="h6 ">Women</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.boys
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.boys) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  boys: false,
                  apply: true,
                },
                filter: filterState.filter.filter((filter) => {
                  return !(
                    filter.type?.gender === "male" && filter.type?.age === "kid"
                  );
                }),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, boys: true, apply: true },
                filter: [
                  ...filterState.filter,
                  { type: { gender: "male", age: "kid" } },
                ],
              });
            }
          }}
        >
          <h6 className="h6 ">Boys</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.girls
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.girls) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  girls: false,
                  apply: true,
                },
                filter: filterState.filter.filter((filter) => {
                  return !(
                    filter.type?.gender === "female" &&
                    filter.type?.age === "kid"
                  );
                }),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, girls: true, apply: true },
                filter: [
                  ...filterState.filter,
                  { type: { gender: "female", age: "kid" } },
                ],
              });
            }
          }}
        >
          <h6 className="h6 ">Girls</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.watches
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.watches) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  watches: false,
                  apply: true,
                },
                filter: filterState.filter.filter(
                  (fltr) => !(fltr.category == "watch")
                ),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, watches: true, apply: true },
                filter: [...filterState.filter, { category: "watch" }],
              });
            }
          }}
        >
          <h6 className="h6 ">Watches</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.straps
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.straps) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  straps: false,
                  apply: true,
                },
                filter: filterState.filter.filter(
                  (fltr) => !(fltr.category == "strap")
                ),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, straps: true, apply: true },
                filter: [...filterState.filter, { category: "strap" }],
              });
            }
          }}
        >
          <h6 className="h6 ">Straps</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            filterState.buttons.accessories
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900"
          }`}
          onClick={() => {
            if (filterState.buttons.accessories) {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  all: false,
                  accessories: false,
                  apply: true,
                },
                filter: filterState.filter.filter(
                  (fltr) => !(fltr.category == "accessory")
                ),
              });
            } else {
              setFilterState({
                ...filterState,
                buttons: {
                  ...filterState.buttons,
                  accessories: true,
                  apply: true,
                },
                filter: [...filterState.filter, { category: "accessory" }],
              });
            }
          }}
        >
          <h6 className="h6 ">Accessories</h6>
        </button>
        <button
          className={`px-6 py-2 rounded-xl transition duration-50 ${
            !filterState.buttons.apply
              ? "bg-zinc-100 text-teal-900"
              : "bg-teal-900 text-zinc-50"
          }`}
          onClick={async () => {
            if (filterState.buttons.apply && filterState.filter?.length > 0) {
              if (
                ["/products"].includes(router.pathname) ||
                (products && products.length > 0)
              ) {
                dispatch(
                  setMyProducts(filterProducts(products, filterState.filter))
                );
              } else {
                const products = await getProducts();
                dispatch(
                  setMyProducts(filterProducts(products, filterState.filter))
                );
                dispatch(setProducts(products));
              }
              setFilterState({
                ...filterState,
                buttons: { ...filterState.buttons, apply: false },
              });
            }
          }}
        >
          <h6 className="h6 ">Apply</h6>
        </button>
      </div>
    </div>
  );
}

export default ProductsFilter;
