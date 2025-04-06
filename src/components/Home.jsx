import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-200 flex bg-[#45726B]">
        <div className="w-1/2 py-55 px-25 ml-30">
          <p className="text-6xl text-white font-body font-normal tracking-wide">
            Discover the perfect blend of elegance, comfort, and trend with our
            exclusive fashion collections.
          </p>
          <Link to="/shop">
            <button className="text-white font-body text-4xl border-2 p-5 mt-5 rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-all duration-200">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="home-right.jpg"
          alt="image not found"
          className="mr-40"
        />
      </div>
      <Footer />
    </>
  );
}
