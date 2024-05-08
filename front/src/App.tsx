// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/pages/layouts/CustomerLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import LogIn from "./pages/LogIn";
import ProductDetailsClient from "./pages/ProductDetailsClient";
import ShoppingCart from "./pages/ShoppingCart";
import UserProfile from "./pages/UserProfile";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import ProductDetailsSeller from "./pages/ProductDetailsSeller";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <h1>Not Found</h1>,
      children: [
        { path: "/", element: <Home /> },
        { path: "catalog", element: <Catalog /> },
        { path: "catalog/:categorie", element: <Catalog /> },
        {
          path: "product-details-client/:id",
          element: <ProductDetailsClient />,
        },
        { path: "shopping-cart", element: <ShoppingCart /> },
        { path: "user-profile", element: <UserProfile /> },
        { path: "checkout", element: <Checkout /> },

        {
          path: "seller", element: <Home/>,
          children: [
            {
              path: "product-details-seller/:id",
              element: <ProductDetailsSeller />,
            },
            { path: "abm-products", element: <h1>ABM</h1> },
          ],
        },
      ],
    },
    { path: "/login", element: <LogIn /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}
