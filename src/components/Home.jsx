import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-200 flex bg-[white] justify-center ">
        <div className="w-5/11 py-45  ml-30">
          <p className="text-6xl text-black font-heading font-normal tracking-wide">
            Discover the perfect blend of elegance, comfort, and trend with our
            exclusive fashion collections.
          </p>
          <Link to="/shop">
            <button className="text-white bg-[#BA757C] font-body text-4xl border-1 px-5 py-3 mt-5 rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-all duration-200">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="home-right.png"
          alt="image not found"
          className="mr-15 mb-30 "
        />
      </div>
    </>
  );
}
