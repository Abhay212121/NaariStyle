import { Link } from "react-router-dom";

function SingleProudct({ src, id, title }) {
  return (
    <Link to={`/proucts/${id}`}>
      <div className="border-2 border-pink-200 m-5 rounded-2xl bg-pink-50 flex flex-col items-center p-2 hover:cursor-pointer hover:scale-105 duration-100">
        <img
          src={src}
          alt="image not found"
        />
        <p className="font-body text-2xl">{title}</p>
      </div>
    </Link>
  );
}

export default function ProductCategory({ data, heading }) {
  return (
    <div className="px-15 py-5">
      <h2 className="font-heading text-4xl mb-2 ml-2">{heading}</h2>
      <div className="border-5 rounded-xl flex">
        {data.map((product) => {
          return (
            <SingleProudct
              id={product.id}
              src={product.thumbnail}
              title={product.title}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
