import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiInstagram } from "@mdi/js";

export default function Footer() {
  return (
    <div className="flex flex-col items-start sm:flex-row bg-[#FFF2F2] justify-around sm:items-center py-8 sm:py-25 px-4 lg:px-5 font-display gap-4  sm:gap-8 ">
      <img
        src="/logo-full.png"
        alt="image not found"
        className=" w-2/3 lg:w-1/7 inline sm:hidden lg:inline self-center"
      />
      <div className="sm:flex flex-col gap-6 ">
        <h2 className="md:text-xl lg:text-2xl underline">Company</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="cursor-pointer hover:text-pink-800">About Us</li>
          <li className="cursor-pointer hover:text-pink-800">Our Services</li>
          <li className="cursor-pointer hover:text-pink-800">Privacy Policy</li>
          <li className="cursor-pointer hover:text-pink-800">
            Affiliate Program
          </li>
        </ul>
      </div>
      <div className="sm:flex flex-col gap-6">
        <h2 className="md:text-xl lg:text-2xl underline">Online Shop</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="cursor-pointer hover:text-pink-800">Watch</li>
          <li className="cursor-pointer hover:text-pink-800">Bag</li>
          <li className="cursor-pointer hover:text-pink-800">Shoes</li>
          <li className="cursor-pointer hover:text-pink-800">Dress</li>
        </ul>
      </div>
      <div className="sm:flex flex-col gap-6">
        <h2 className="md:text-xl lg:text-2xl underline">Get Help</h2>
        <ul className="md:text-lg lg:text-xl flex flex-col gap-2">
          <li className="cursor-pointer hover:text-pink-800">FAQ</li>
          <li className="cursor-pointer hover:text-pink-800">Order Status</li>
          <li className="cursor-pointer hover:text-pink-800">Returns</li>
          <li className="cursor-pointer hover:text-pink-800">
            Payment Options
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-col gap-6 self-center sm:self-start">
        <h2 className="text-3xl sm:text-xl lg:text-2xl underline">Follow Us</h2>
        <div className="flex gap-4  md:gap-4">
          <Icon
            path={mdiLinkedin}
            size={1.5}
            className="cursor-pointer hover:scale-105 hover:transition-all duration-100 sm:p-1 md:p-0"
          />
          <Icon
            path={mdiInstagram}
            size={1.5}
            className="cursor-pointer hover:scale-105 hover:transition-all duration-100 sm:p-1 md:p-0"
          />
          <div className="">
            <Icon
              path={mdiGithub}
              size={1.5}
              className="cursor-pointer hover:scale-105 hover:transition-all duration-100  sm:p-1 md:p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
