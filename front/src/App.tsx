import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import ProductDetailsSeller from "./pages/ProductDetailsSeller";
import ProductDetailsClient from "./pages/ProductDetailsClient";

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
    path: "/ProductDetailsClient",
    element: <ProductDetailsClient />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <Home />,
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
