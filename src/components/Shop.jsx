import { useEffect } from "react";
import { useState } from "react";
import ProductCategory from "./ProductCategory";

export default function Shop() {
  const [loading, setLoading] = useState(true);

  const [topData, setTopData] = useState(null);
  const [dressData, setDressData] = useState(null);
  const [jewelleryData, setJewelleryData] = useState(null);
  const [shoeData, setShoeData] = useState(null);
  const [watchData, setWatchData] = useState(null);
  const [bagData, setBagData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tops")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setTopData(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setDressData(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-jewellery")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setJewelleryData(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setShoeData(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-watches")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setWatchData(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => setBagData(data))
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      );
  }, []);

  return (
    <>
      {loading ? (
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJsd28wcTYyeDJoaW54MWZ5ZWZrZHp0aGp1Z2s3cXJudXp1OG1xeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKrVbQSUiXzWi0U/giphy.gif"
          alt="image not found"
          className="m-auto"
        />
      ) : (
        <div>
          <ProductCategory
            data={dressData}
            heading={"Dresses"}
          />
          <ProductCategory
            data={topData}
            heading={"Tops"}
          />
          <ProductCategory
            data={shoeData}
            heading={"Shoes"}
          />
          <ProductCategory
            data={jewelleryData}
            heading={"Jewelleries"}
          />
          <ProductCategory
            data={watchData}
            heading={"Watches"}
          />
          <ProductCategory
            data={bagData}
            heading={"Bags"}
          />
        </div>
      )}
    </>
  );
}
