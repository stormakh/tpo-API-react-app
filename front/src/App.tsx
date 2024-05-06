// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "",
      element: <CustomerLayout />,
      errorElement: <h1>Not Found</h1>,
      children: [
        { path: "", element: <Home /> },
        { path: "catalog", element: <Catalog /> },
        { path: "login", element: <LogIn /> },
        { path: "register", element: <Register /> },
        {
          path: "product-details-client/:id",
          element: <ProductDetailsClient />,
        },
        { 
          path: "shopping-cart", 
          element: <ShoppingCart />, 
          children: [
            { path: "checkout", element: <Checkout /> }
          ],
        },
        { path: "checkout", element: <Checkout /> },
        { path: "user-profile", element: <UserProfile /> },
      ],
    },
    {
      path: "/seller",
      element: <SellerLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "catalog", element: <Catalog /> },
        {
          path: "product-details-sellers",
          element: <ProductDetailsSeller />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
