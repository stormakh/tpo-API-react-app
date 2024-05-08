import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";


import { UserSession } from "@/models/users";
import { useDispatch, useSelector } from "react-redux";
import { clearUserSession } from "@/store/store";
import noPayLogo from "@/assets/nopay.svg";
interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  const totalAmount = useSelector(
    (state: { shoppingCart: { totalAmount: number } }) =>
      state.shoppingCart.totalAmount
  );
  const user = useSelector(
    (state: { userSession: UserSession }) => state.userSession
  );
  const dispatch = useDispatch();

  function handleLogOutUser() {
    dispatch(clearUserSession());
  }

  return (
    <nav className="static top-0 w-screen h-auto  grid grid-cols-3 items-center px-8">
      <NavSheet />
      <div className="justify-self-center">
        <Link to="/">
          <img src={noPayLogo} alt="Nopay Logo" className="size-40" />
        </Link>
      </div>
      <div className="flex justify-self-end gap-2 px-4">
        {/*<Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Search color="black" />
  </Button>*/}
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to="/login">
            <UserRound color="black" />
          </Link>
        </Button>
        {user !== null ? (
          <Button onClick={handleLogOutUser}>{user?.username}</Button>
        ) : null}
        {/*<Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Heart color="black" />
  </Button>*/}
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to={"shopping-cart"} className="relative">
            <ShoppingBag className="z-0" color="black" />
            <div className="bg-black p-1 px-2 rounded-full absolute -bottom-3 -right-2">
              {totalAmount > -1 && (
                <p className="   font-bold z-10 text-white">{totalAmount}</p>
              )}
            </div>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
