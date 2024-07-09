import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Componant/Home/Home";
import Products from "../Componant/Products/Products";
import Dashboard from "../Componant/Dashboard/Dashboard";
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
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
        },
    ]
  },
]);

export { createMyRouter };
