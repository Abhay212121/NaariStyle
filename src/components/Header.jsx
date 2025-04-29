import Icon from "@mdi/react";
import { mdiHome, mdiShopping, mdiAccount, mdiCartHeart } from "@mdi/js";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const cartArr = useSelector((state) => state.cartItems);

  return (
    <header className="sticky bg-white top-0 w-[99vw] z-10">
      <div className="px-4 py-4 container mx-auto sm:px-10 w-full flex items-center justify-between font-heading">
        <div className="w-40">
          <img
            src="/logo-down.png"
            alt="logo not found"
            className="h-full w-full"
          />
        </div>
        <div className="text-[black]">
          <ul className="flex gap-0 lg:gap-6">
            <li
              className={
                location.pathname == "/" ? "bg-[#ba757c70] rounded-xl" : "null"
              }
            >
              <Link to={"/"}>
                <div className="flex items-center xs:gap-1 rounded-md p-1 sm:p-2 cursor-pointer">
                  <Icon path={mdiHome} size={1.7} />
                  <p className="text-2xl hidden lg:inline-block ">Home</p>
                </div>
              </Link>
            </li>
            <li
              className={
                location.pathname == "/shop"
                  ? "bg-[#ba757c70] rounded-xl"
                  : location.pathname.includes("/products")
                  ? "bg-[#ba757c70] rounded-xl"
                  : ""
              }
            >
              <Link to={"/shop"}>
                <div className="flex items-center gap-1 rounded-md p-1 sm:p-2 cursor-pointer">
                  <Icon path={mdiShopping} size={1.5} />
                  <p className="text-2xl hidden lg:inline-block">Shop</p>
                </div>
              </Link>
            </li>
            <li
              className={
                location.pathname == "/about"
                  ? "bg-[#ba757c70] rounded-xl"
                  : "null"
              }
            >
              <Link to={"/about"}>
                <div className="flex items-center gap-1 rounded-md p-1 sm:p-2 cursor-pointer">
                  <Icon path={mdiAccount} size={1.5} />
                  <p className="text-2xl hidden lg:inline-block">About</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/cart"}>
          <div className="hover:cursor-pointer relative items-center flex sm:p-0 p-1 ">
            {cartArr.length != 0 && (
              <span className="text-sm sm:text-xl absolute bg-white left-5 bottom-8 sm:left-4 border-2  rounded-2xl border-white sm:bottom-7 w-4  text-[#C8651B] font-bold font-heading px-1">
                {cartArr.length}
              </span>
            )}
            <Icon path={mdiCartHeart} size={2} className="p-1.5 sm:p-0" />
          </div>
        </Link>
      </div>
    </header>
  );
}
