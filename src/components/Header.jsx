import Icon from "@mdi/react";
import { mdiCartOutline, mdiHome, mdiShopping, mdiAccount } from "@mdi/js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white py-2 px-16 flex items-center justify-between font-display">
      <img
        src="/logo-down.png"
        alt="logo not found"
      />
      <div className="w-1/3 text-[#CB6D6D]">
        <ul className="flex gap-10">
          <Link to="/">
            <li className="flex items-center gap-1 hover:cursor-pointer">
              <Icon
                path={mdiHome}
                size={1.7}
              />
              <p className="text-2xl">Home</p>
            </li>
          </Link>
          <Link to="/shop">
            <li className="flex items-center gap-1 hover:cursor-pointer">
              <Icon
                path={mdiShopping}
                size={1.5}
              />
              <p className="text-2xl">Shop</p>
            </li>
          </Link>
          <Link to="/about">
            <li className="flex items-center gap-1 hover:cursor-pointer">
              <Icon
                path={mdiAccount}
                size={1.5}
              />
              <p className="text-2xl">About</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="hover:cursor-pointer">
        <Icon
          path={mdiCartOutline}
          size={1.5}
        />
      </div>
    </div>
  );
}
