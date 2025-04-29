import { Link } from "react-router-dom";

function SingleProudct({ src, id, title, heading }) {
  return (
    <Link to={`/products/${heading.toLowerCase()}/${id}`}>
      <div className="border-2 border-pink-200 w-32 sm:w-50 lg:w-60  sm:h-80 m-5 rounded-2xl bg-[#E1C2C5] flex flex-col items-center p-2 hover:cursor-pointer hover:scale-105 duration-100 hover:bg-[#cd979d] ">
        <div className="w-full">
          <img
            src={src}
            alt="image not found"
            className="w-full"
          />
        </div>
        <p className="font-body font-bold text-center text-md sm:text-xl px-2">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default function ProductCategory({ data, heading, displayShop }) {
  return (
    <div className={`px-10 sm:px-15 py-5 ${displayShop ? "" : "hidden"}`}>
      <span className="font-heading text-[#372527] text-4xl ml-8 px-4 relative top-3 bg-white">
        {heading}
      </span>
      <div className="border-5 rounded-xl flex-wrap flex 2xl:gap-5 2xl:pl-10">
        {data.map((product) => {
          return (
            <SingleProudct
              id={product.id}
              src={product.thumbnail}
              title={product.title}
              key={product.id}
              heading={heading}
            />
          );
        })}
      </div>
    </div>
  );
}
