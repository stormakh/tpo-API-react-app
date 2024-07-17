import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkCorrectPath } from "@/lib/users";
import {  UserType } from "@/models/users";
import { getUserSession } from "@/helpers/user";

export default function SellerMiddleware() {
  const user = getUserSession();
  const navigate = useNavigate();
  const allowedUserTypes: UserType[] = ["SELLER", "ADMIN"];
  
  useEffect(() => {
    if (user) {
      console.log(user.role);
      checkCorrectPath(user.role as UserType, allowedUserTypes, navigate);
    } else {
      checkCorrectPath(null, allowedUserTypes, navigate);
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}
