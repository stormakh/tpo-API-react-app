import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetailsSeller from "./pages/ProductDetailsSeller";
import ShoppingCart from "./pages/ShoppingCart";

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
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart />,
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
