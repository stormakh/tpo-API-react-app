// src/layouts/SellerLayout.tsx
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBarSeller from "@/components/NavBarSeller"; // Your seller navbar
import Footer from "@/components/Footer"; // Shared footer

import { checkCorrectPath } from "@/lib/users";
import { UserSession, UserType } from "@/models/users";
import { useSelector } from "react-redux";

interface SellerLayoutProps {}

export default function SellerLayout({}: SellerLayoutProps) {
  const user = useSelector(
    (state: { userSession: UserSession }) => state.userSession
  );
  const navigate = useNavigate();
  const expectedUserType = "seller" as UserType;

  useEffect(() => {
    if (user !== null) {
      checkCorrectPath(user?.type, expectedUserType, navigate);
      console.log("userType", user);
    } else {
      checkCorrectPath(null, expectedUserType, navigate);
    }
  }, [user]);

  return (
    <>
      <NavBarSeller user={user} />
      <main>
        <Outlet /> {/* Renders the currently matched route's component */}
      </main>
      <Footer />
    </>
  );
}
