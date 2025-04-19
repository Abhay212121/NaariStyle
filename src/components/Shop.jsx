import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import { useSelector } from "react-redux";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [displayShop, setDisplayShop] = useState(false);

  const bagData = useSelector((state) => state.bagsData.data);
  const topData = useSelector((state) => state.topsData.data);
  const jewelleriesData = useSelector((state) => state.jewelleriesData.data);
  const watchData = useSelector((state) => state.watchData.data);
  const shoesData = useSelector((state) => state.shoesData.data);
  const dressesData = useSelector((state) => state.dressesData.data);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    setTimeout(() => {
      setDisplayShop(true);
    }, 1500);
  }, []);

  return (
    <div>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJsd28wcTYyeDJoaW54MWZ5ZWZrZHp0aGp1Z2s3cXJudXp1OG1xeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKrVbQSUiXzWi0U/giphy.gif"
        alt="image not found"
        className={`h-200 relative bottom-22 p-30 m-auto ${
          displayShop ? "hidden " : ""
        }`}
      />
      {!loading && (
        <div>
          <ProductCategory
            data={topData?.products || []}
            heading={"Tops"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={dressesData?.products || []}
            heading={"Dresses"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={shoesData?.products || []}
            heading={"Shoes"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={watchData?.products || []}
            heading={"Watches"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={bagData?.products || []}
            heading={"Bags"}
            displayShop={displayShop}
          />
          <ProductCategory
            data={jewelleriesData?.products || []}
            heading={"Jewelleries"}
            displayShop={displayShop}
          />
        </div>
      )}
    </div>
  );
}
