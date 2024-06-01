import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/Products/Products";
import { Layout } from "./pages/home/Layout";
import { Login } from "./pages/Login/Login";
import { CreateProduct } from "./pages/Products/CreateProduct";
import { ProductDetail } from "./pages/Products/ProductDetail";
import { Cart } from "./pages/Products/Cart";
import { CreateUser } from "./pages/users/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/protected",
        element: <h1>Protected</h1>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "createproduct",
        element: <CreateProduct />,
      },
      {
        path: "viewproduct/:id",
        element: <ProductDetail />,
      },
      {
        path: "createuser",
        element: <CreateUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
