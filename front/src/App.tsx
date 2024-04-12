import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
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
