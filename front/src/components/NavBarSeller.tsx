import { Button } from "@/components/ui/button";
import { Heart, PackageSearch, Search, ShoppingBag, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";
import { UserSession } from "@/models/users";
import { useDispatch } from "react-redux";
import { clearUserSession } from "@/store/store";
import noPayLogoSellers from "@/assets/nopaySellers.svg";
interface NavBarProps {
  user: UserSession | null;
}

export default function NavBar({ user }: NavBarProps) {
  const dispatch = useDispatch();

  function handleLogOutUser() {
    dispatch(clearUserSession());
  }

  return (
    <nav className="static top-0 w-screen h-auto  grid grid-cols-3 items-center px-12">
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
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to="/login">
            <UserRound color="black" />
          </Link>
        </Button>
        {user !== null ? (
          <Button onClick={handleLogOutUser}>{user?.username}</Button>
        ) : null}
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <ShoppingBag className="mr-1" color="black" />
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to={"abm-products"}>
            <PackageSearch className="mr-1" color="black" />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
