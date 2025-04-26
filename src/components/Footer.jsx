import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiInstagram } from "@mdi/js";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row bg-[#FFF2F2] justify-around items-center sm:items-start py-15 sm:py-25 px-10 lg:px-5 font-display gap-8 sm:gap-0 ">
      <div className="hidden sm:flex flex-col gap-6 ">
        <h2 className="md:text-xl lg:text-2xl underline">Company</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="hover:cursor-pointer hover:text-pink-800">About Us</li>
          <li className="hover:cursor-pointer hover:text-pink-800">
            Our Services
          </li>
          <li className="hover:cursor-pointer hover:text-pink-800">
            Privacy Policy
          </li>
          <li className="hover:cursor-pointer hover:text-pink-800">
            Affiliate Program
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex flex-col gap-6">
        <h2 className="md:text-xl lg:text-2xl underline">Online Shop</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="hover:cursor-pointer hover:text-pink-800">Watch</li>
          <li className="hover:cursor-pointer hover:text-pink-800">Bag</li>
          <li className="hover:cursor-pointer hover:text-pink-800">Shoes</li>
          <li className="hover:cursor-pointer hover:text-pink-800">Dress</li>
        </ul>
      </div>
      <img
        src="/logo-full.png"
        alt="image not found"
        className=" w-2/3 lg:w-1/7 inline sm:hidden lg:inline"
      />
      <div className="hidden sm:flex flex-col gap-6">
        <h2 className="md:text-xl lg:text-2xl underline">Get Help</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="hover:cursor-pointer hover:text-pink-800">FAQ</li>
          <li className="hover:cursor-pointer hover:text-pink-800">
            Order Status
          </li>
          <li className="hover:cursor-pointer hover:text-pink-800">Returns</li>
          <li className="hover:cursor-pointer hover:text-pink-800">
            Payment Options
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex flex-col gap-6">
        <h2 className="text-3xl sm:text-xl lg:text-2xl underline">Follow Us</h2>
        <div className="flex md:gap-2">
          <Icon
            path={mdiLinkedin}
            size={1.5}
            className="hover:cursor-pointer hover:scale-105 hover:transition-all duration-100 sm:p-1 md:p-0"
          />
          <Icon
            path={mdiInstagram}
            size={1.5}
            className="hover:cursor-pointer hover:scale-105 hover:transition-all duration-100 sm:p-1 md:p-0"
          />
          <div className="">
            <Icon
              path={mdiGithub}
              size={1.5}
              className="hover:cursor-pointer hover:scale-105 hover:transition-all duration-100  sm:p-1 md:p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
