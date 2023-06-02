import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/Body";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
