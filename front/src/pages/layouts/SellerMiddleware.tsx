import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkCorrectPath } from "@/lib/users";
import { UserSession, UserType } from "@/models/users";
import { useSelector } from "react-redux";
import { getUserSession } from "@/helpers/user";

export default function SellerMiddleware() {
  const user = getUserSession();
  const navigate = useNavigate();
  const expectedUserType = "SELLER" as UserType;
  console.log(user.role);
  useEffect(() => {
    if (user) {
      checkCorrectPath(user.role as UserType, expectedUserType, navigate);
      console.log("userType", user);
    } else {
      checkCorrectPath(null, expectedUserType, navigate);
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
}
