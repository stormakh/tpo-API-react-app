import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetailsSeller from "./pages/ProductDetailsSeller";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetailsClient from "./pages/ProductDetailsClient";
import UserProfile from "./pages/UserProfile";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ProductDetailsSeller",
    element: <ProductDetailsSeller />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
  {
    path: "/ProductDetailsClient",
    element: <ProductDetailsClient />,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
