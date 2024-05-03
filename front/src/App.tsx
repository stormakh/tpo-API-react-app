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
            // Define additional routes for sellers here
          ],
        },
      ]),
    [user]
  );

  return <RouterProvider router={router} />;
}

export default App;
