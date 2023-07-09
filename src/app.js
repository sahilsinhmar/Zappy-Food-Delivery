import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { ProfileClass as Profile } from "./components/ProfileClass";
import { SkeletonImage } from "./components/skeletons/skeletonImage";

import store from "./components/Store";
import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
import Help from "./components/Help";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<SkeletonImage />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
