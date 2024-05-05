// src/components/Layout.tsx
import { useEffect } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar"; // Assume you have a Navbar component
import Footer from "../../components/Footer"; // Assume you have a Footer component

import { UserSession, UserType } from "@/models/users";
import { checkCorrectPath } from "@/lib/users";
import { useSelector } from "react-redux";

interface CustomerLayoutProps {
  
}

export default function CustomerLayout ({} : CustomerLayoutProps)  {
  
  const navigate = useNavigate();
  const expectedUserType = "customer" as UserType;
  
  const user  = useSelector((state: { userSession: UserSession }) => state.userSession);

  useEffect(() => {
    if (user !== null) {
      checkCorrectPath(user.type, expectedUserType, navigate);
      console.log("user.userType", user.type);
    }else{
      checkCorrectPath(null,expectedUserType,navigate)
    }
  }, [user]);

  return (
    <>
      <Navbar user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


