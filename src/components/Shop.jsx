import { useEffect } from "react";
import { useState } from "react";
import ProductCategory from "./ProductCategory";
import { useDispatch, useSelector } from "react-redux";
import { setBags } from "../features/bagsData/bagsDataSlice";
import { setTops } from "../features/topsData/topsDataSlice";
import { setJewelleries } from "../features/jewelleriesData/jewelleriesDataSlice";
import { setWatches } from "../features/watchData/watchDataSlice";
import { setShoes } from "../features/shoeData/shoeDataSlice";
import { setDresses } from "../features/dressesData/dressesDataSlice";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [displayShop, setDisplayShop] = useState(false);

  const bagData = useSelector((state) => state.bagsData.value);
  const topData = useSelector((state) => state.topsData.value);
  const jewelleriesData = useSelector((state) => state.jewelleriesData.value);
  const watchData = useSelector((state) => state.watchData.value);
  const shoesData = useSelector((state) => state.shoesData.value);
  const dressesData = useSelector((state) => state.dressesData.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tops")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setTops(data)))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setDresses(data)))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-jewellery")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setJewelleries(data)))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setShoes(data)))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-watches")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setWatches(data)))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((data) => data.products)
      .then((data) => dispatch(setBags(data)))
      .catch((err) => console.log(err))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500)
      )
      .finally(() => {
        setTimeout(() => {
          setDisplayShop(true);
        }, 1500);
      });
  }, []);

  return (
    <>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJsd28wcTYyeDJoaW54MWZ5ZWZrZHp0aGp1Z2s3cXJudXp1OG1xeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKrVbQSUiXzWi0U/giphy.gif"
        alt="image not found"
        className={`m-auto ${displayShop ? "hidden " : ""}`}
      />
      {!loading && (
        <div>
          <ProductCategory
            data={dressesData}
            heading={"Dresses"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={topData}
            heading={"Tops"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={shoesData}
            heading={"Shoes"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={watchData}
            heading={"Watches"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={bagData}
            heading={"Bags"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={jewelleriesData}
            heading={"Jewelleries"}
            displayShop={displayShop}
          />
        </div>
      )}
    </>
  );
}
