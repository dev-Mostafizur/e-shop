import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Componant/Home/Home";
import Products from "../Componant/Products/Products";
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
            element: <Products></Products>
        }
    ]
  },
]);

export { createMyRouter };
