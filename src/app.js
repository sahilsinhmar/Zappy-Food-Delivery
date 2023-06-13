import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { RestaurantMenu } from "./components/Menu/RestaurantMenu";
import { ProfileClass as Profile } from "./components/ProfileClass";
import { SkeletonImage } from "./components/skeletons/skeletonImage";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

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
        path: "/contact",
        element: <Contact />,
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
