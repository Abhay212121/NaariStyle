import Icon from "@mdi/react";
import { mdiCartOutline, mdiHome, mdiShopping, mdiAccount } from "@mdi/js";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-[white] py-2 px-30 flex items-center justify-between font-heading">
      <img
        src="/logo-down.png"
        alt="logo not found"
      />
      <div className="w-1/3 text-[black]">
        <ul className="flex gap-6">
          <li
            className={
              location.pathname == "/" ? "bg-[#ba757c70] rounded-xl" : "null"
            }
          >
            <Link to={"/"}>
              <div className="flex items-center gap-1 rounded-md p-2  cursor-pointer">
                <Icon
                  path={mdiHome}
                  size={1.7}
                />
                <p className="text-2xl">Home</p>
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
              <div className="flex items-center gap-1 rounded-md p-2    cursor-pointer">
                <Icon
                  path={mdiShopping}
                  size={1.5}
                />
                <p className="text-2xl">Shop</p>
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
              <div className="flex items-center gap-1 rounded-md p-2   cursor-pointer">
                <Icon
                  path={mdiAccount}
                  size={1.5}
                />
                <p className="text-2xl">About</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <Link to={"/cart"}>
        <div className="hover:cursor-pointer hover:scale-105">
          <Icon
            path={mdiCartOutline}
            size={1.6}
          />
        </div>
      </Link>
    </div>
  );
}
