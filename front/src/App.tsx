// src/App.tsx
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppState } from "@/store/store";
import CustomerLayout from "@/pages/layouts/CustomerLayout";
import SellerLayout from "@/pages/layouts/SellerLayout";
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
  const user = useSelector((state: AppState) => state.userSession);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <CustomerLayout user={user} />,
          children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
          ],
        },
        { path: "login", element: <LogIn /> },
        { path: "register", element: <Register /> },
        {
          path: "/customer",
          element: <CustomerLayout user={user} />,
          children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
            {
              path: "product-details-client",
              element: <ProductDetailsClient />,
            },
            { path: "shopping-cart", element: <ShoppingCart /> },
            { path: "user-profile", element: <UserProfile /> },
            { path: "checkout", element: <Checkout /> },
          ],
        },
        {
          path: "/seller",
          element: <SellerLayout user={user} />,
          children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
            {
              path: "product-details-sellers",
              element: <ProductDetailsSeller />,
            },
          ],
        },
      ]),
    [user]
  );

  return <RouterProvider router={router} />;
}
