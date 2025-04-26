import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className=" h-200 sm:h-200 md:h-120 lg:h-140 xl:h-170 mb-20 sm:mb-20 md:mb-0 xl:mb-30 flex flex-col-reverse md:flex-row bg-[white] gap-4 md:gap-20 lg:gap-0 justify-around xs:justify-center items-center ">
        <div className="w-4/5 sm:w-4/5 md:w-3/11 lg:w-4/11 xl:w-5/11 md:ml-0 lg:ml-20 xl:ml-30 flex gap-2 flex-col items-center md:inline ">
          <p className="text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-6xl text-black font-heading font-normal tracking-wide">
            Discover the perfect blend of elegance, comfort, and trend with our
            exclusive fashion collections.
          </p>
          <Link to="/shop">
            <button className="text-white bg-[#BA757C] font-body text-2xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl border-1 px-5 py-3 mt-5  rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-all duration-200">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/3 p-6 sm:p-0 sm:my-10 md:mb-25 lg:mb-20 ">
          <img
            src="home-right.png"
            alt="image not found"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
