// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar"; // Assume you have a Navbar component
import Footer from "../../components/Footer"; // Assume you have a Footer component
import { useSelector } from "react-redux";
import { UserSession } from "@/models/users";
import NavBarSeller from "@/components/NavBarSeller";

export default function Layout() {
  const user = useSelector(
    (state: { userSession: UserSession }) => state.userSession
  );

  return (
    <>
      {user && user.type === "seller" ? <NavBarSeller /> : <Navbar />}

      <Outlet />

      <Footer />
    </>
  );
}
