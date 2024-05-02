import { Button } from "@/components/ui/button";
import {
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";

export default function NavBar() {
  return (
    <nav className="static top-0 w-screen h-auto  grid grid-cols-3 items-center px-4">
      <NavSheet />
      <div className="justify-self-center">
        <img
          src="./src/assets/nopay.svg"
          alt="Nopay Logo"
          className="size-40"
        />
      </div>
      <div className="flex justify-self-end gap-2 px-4">
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Search color="black" />
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to="/login">
            <UserRound color="black" />
          </Link>
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Heart color="black" />
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <ShoppingBag className="mr-1" color="black" />
          {/*implement UseState here to track products in cart */}
        </Button>
      </div>
    </nav>
  );
}

