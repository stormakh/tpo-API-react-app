// src/App.tsx
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
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

export default function App() {
  const userType = useSelector((state: AppState) => state.userSession?.type);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: userType ? (
            <Navigate to={`/${userType}`} replace />
          ) : (
            <CustomerLayout />
          ),
          children: [
            { path: "", element: <Home /> },
            { path: "login", element: <LogIn /> },
          ],
        },

        {
          path: "/customer",
          element: <CustomerLayout />,
          children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
            { path: "product-details-client", element: <ProductDetailsClient /> },
            { path: "shopping-cart", element: <ShoppingCart /> },
            { path: "user-profile", element: <UserProfile /> },
            { path: "checkout", element: <Checkout /> },
          ],
        },
        {
          path: "/seller",
          element: <SellerLayout />,
          children: [
            { path: "", element: <Home /> },
            // Define additional routes for sellers here
          ],
        },
      ]),
    [userType]
  ); 

  return <RouterProvider router={router} />;
}
