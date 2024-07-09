import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
              
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            
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
