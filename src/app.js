import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";

import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { ProfileClass as Profile } from "./components/ProfileClass";
import { SkeletonImage } from "./components/skeletons/skeletonImage";
import Error from "./components/Error";

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
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
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
