import { Button } from "@/components/ui/button";
import {
  Heart,
  LogOut,
  PackageSearch,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";
import { useDispatch, useSelector } from "react-redux";
import { clearUserSession } from "@/store/store";
import noPayLogoSellers from "@/assets/nopaySellers.svg";
import { getUserSession, logOutSession } from "@/helpers/user";
interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  const dispatch = useDispatch();
  const user = getUserSession();
  const totalAmount = useSelector(
    (state: { shoppingCart: { totalAmount: number } }) =>
      state.shoppingCart.totalAmount
  );
  function handleLogOutUser() {
    dispatch(clearUserSession());
    logOutSession();
  }

  return (
    <nav className="static top-0 w-full h-auto  grid grid-cols-3 items-center px-12">
      <NavSheet />
      <div className="justify-self-center">
        <Link to={"/seller"}>
          <img
            src={noPayLogoSellers}
            alt="Nopay Logo"
            className="size-40 w-full p-14"
          />
        </Link>
      </div>
      <div className="flex justify-self-end gap-3 px-4">
        {user !== null ? (
          <Link to={"user-profile"} className="relative">
            <Button>{user.firstName}</Button>
          </Link>
        ) : null}
        <Link to={"shopping-cart"} className="relative">
          <ShoppingBag className="z-0" color="black" />
          <div className="bg-black p-1 px-2 rounded-full absolute -bottom-3 -right-2">
            {totalAmount > -1 && (
              <p className=" text-base font-bold z-10 text-white">{totalAmount}</p>
            )}
          </div>
        </Link>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to={"seller/abm-products"}>
            <PackageSearch className="mr-1" color="black" />
          </Link>
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to="/login">
          <LogOut onClick={handleLogOutUser} color="black"/>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
