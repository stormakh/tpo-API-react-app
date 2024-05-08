import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkCorrectPath } from "@/lib/users";
import { UserSession, UserType } from "@/models/users";
import { useSelector } from "react-redux";

export default function SellerMiddleware() {
  const user = useSelector(
    (state: { userSession: UserSession }) => state.userSession
  );
  const navigate = useNavigate();
  const expectedUserType = "seller" as UserType;

  useEffect(() => {
    if (user) {
      checkCorrectPath(user?.type, expectedUserType, navigate);
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
