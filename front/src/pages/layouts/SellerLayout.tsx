// src/layouts/SellerLayout.tsx
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBarSeller from "@/components/NavBarSeller"; // Your seller navbar
import Footer from "@/components/Footer"; // Shared footer
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { checkCorrectPath } from "@/lib/users";
import { UserType } from "@/models/users";

const SellerLayout: React.FC = () => {
  const userType = useSelector((state: AppState) => state.userSession?.type);
  const navigate = useNavigate();
  const expectedUserType = "seller" as UserType;

  useEffect(() => {
    checkCorrectPath(userType, expectedUserType, navigate);
    console.log("userType", userType);
  }, [userType]);

  return (
    <>
      <NavBarSeller />
      <main>
        <Outlet /> {/* Renders the currently matched route's component */}
      </main>
      <Footer />
    </>
  );
};

export default SellerLayout;
