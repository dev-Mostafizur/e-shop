import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Componant/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <section className="flex justify-between px-10 shadow-md p-5">
        <div className="text-3xl font-bold ">
          <span className="text-purple-500">E</span>-Shop
        </div>
        <nav>
          <ul className="flex">
            <li className="flex gap-5">
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
