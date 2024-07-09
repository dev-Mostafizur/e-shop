import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Componant/Home/Home";
import Products from "../Componant/Products/Products";
import Dashboard from "../Componant/Dashboard/Dashboard";
import SingleProduct from "../Componant/SingleProduct/SingleProduct";
import About from "../Componant/Dashboard/About/About";
import DashboardLayout from "../Componant/Dashboard/DashboardLayout/DashboardLayout";
import Profile from "../Componant/Dashboard/Profile/Profile";
const createMyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/products",
            element: <Products></Products>,
            loader: ()=> fetch(`https://dummyjson.com/products`),
        },
        {
            path: "/dashboard",
            element: <DashboardLayout></DashboardLayout>,
            children: [
              {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
              },
              {
                path: '/dashboard/profile',
                element: <Profile></Profile>,
              },
              {
                path: '/dashboard/about',
                element: <About></About>,
              }
            ]
        },
        {
          path: "/products/:id",
          element: <SingleProduct></SingleProduct>,
          loader: (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
       
    ]
  },
]);

export { createMyRouter };
