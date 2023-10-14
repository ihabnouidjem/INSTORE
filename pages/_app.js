import store from "@/app/store";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";
import axios from "axios";

export const appState = createContext();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const [updatesState, setUpdatesState] = useState({ updateUser: false });

  const getTime = () => {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    return { date: date, month: month, year: year };
  };
  const totalPrice = (cart) => {
    let total = 0;
    if (cart && cart.length > 0)
      cart.map((product) => {
        total += product.price * product.quantity;
      });
    return total;
  };
  const filterProducts = (products, filter) => {
    let filteredProducts = [];
    products.map((product) => {
      filter.map((fltr) => {
        if (
          ((fltr.type &&
            product.type &&
            fltr.type.gender === product.type?.gender &&
            fltr.type.age === product.type?.age) ||
            (fltr.category &&
              product.category &&
              fltr.category === product.category)) &&
          !filteredProducts.includes(product)
        ) {
          filteredProducts.push(product);
        }
      });
    });
    return filteredProducts;
  };
  const checkout = async (uid, userOrder, order, user) => {
    if (order && uid) {
      axios
        .post(
          `${
            process.env.NODE_ENV === "production"
              ? "https://instore-eta.vercel.app"
              : process.env.NODE_ENV === "development" &&
                "http://localhost:3000"
          }/api/orders`,
          userOrder
        )
        .then((res) => {
          axios
            .post(
              `${
                process.env.NODE_ENV === "production"
                  ? "https://instore-eta.vercel.app"
                  : process.env.NODE_ENV === "development" &&
                    "http://localhost:3000"
              }/api/users/update/${uid}`,

              {
                orders: [...user.orders, { ...order, orderId: res.data?._id }],
                cart: [],
                newOrders: user.newOrders + 1,
                newProducts: 0,
              }
            )
            .then((res) =>
              setUpdatesState({ ...updatesState, updateUser: true })
            );
        });
    }
  };
  const postUserItems = async (uid, items) => {
    axios
      .post(
        `${
          process.env.NODE_ENV === "production"
            ? "https://instore-eta.vercel.app"
            : process.env.NODE_ENV === "development" && "http://localhost:3000"
        }/api/users/update/${uid}`,
        items
      )
      .then((res) => setUpdatesState({ ...updatesState, updateUser: true }));
  };
  const getProducts = async () => {
    let products = [];
    await axios
      .get(
        `${
          process.env.NODE_ENV === "production"
            ? "https://instore-eta.vercel.app"
            : process.env.NODE_ENV === "development" && "http://localhost:3000"
        }/api/products`
      )
      .then((res) => {
        products = res.data;
      });
    return products;
  };

  if (
    ["/dashboard"].includes(router.pathname) ||
    ["/signin"].includes(router.pathname) ||
    ["/signout"].includes(router.pathname)
  )
    return (
      <>
        <SessionProvider session={session}>
          <Provider store={store}>
            <appState.Provider
              value={{
                checkout,
                totalPrice,
                getTime,
                updatesState,
                setUpdatesState,
                postUserItems,
                filterProducts,
                getProducts,
              }}
            >
              <Component {...pageProps} />
            </appState.Provider>
          </Provider>
        </SessionProvider>
      </>
    );

  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <appState.Provider
            value={{
              checkout,
              totalPrice,
              getTime,
              updatesState,
              setUpdatesState,
              postUserItems,
              filterProducts,
              getProducts,
            }}
          >
            <Header />
            <Component {...pageProps} />
            <Footer />
          </appState.Provider>
        </Provider>
      </SessionProvider>
    </>
  );
}
