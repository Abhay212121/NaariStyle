import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBagsData } from "../features/apiData/bagsDataSlice.js";
import { fetchTopsData } from "../features/apiData/topsDataSlice.js";
import { fetchDressesData } from "../features/apiData/dressesDataSlice.js";
import { fetchWatchData } from "../features/apiData/watchDataSlice.js";
import { fetchJewelleryData } from "../features/apiData/jewelleriesDataSlice.js";
import { fetchShoeData } from "../features/apiData/shoeDataSlice.js";
import { selectObj } from "../features/selected product/selectedProductSlice.js";
import Icon from "@mdi/react";
import { mdiArrowLeftThin, mdiArrowRightThin } from "@mdi/js";
import { addInCart } from "../features/cart/cartSlice.js";

export default function Products() {
  const { id, category } = useParams();
  const [loading, setLoading] = useState(true);
  const [DisplayFlag, setDisplayFlag] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);

  const dispatch = useDispatch();

  const bagData = useSelector((state) => state.bagsData.data);
  const topData = useSelector((state) => state.topsData.data);
  const jewelleriesData = useSelector((state) => state.jewelleriesData.data);
  const watchData = useSelector((state) => state.watchData.data);
  const shoesData = useSelector((state) => state.shoesData.data);
  const dressesData = useSelector((state) => state.dressesData.data);
  const selectedObj = useSelector((state) => state.selectedProduct.value);

  useEffect(() => {
    switch (category) {
      case "tops":
        dispatch(fetchTopsData());
        break;
      case "dresses":
        dispatch(fetchDressesData());
        break;
      case "watches":
        dispatch(fetchWatchData());
        break;
      case "shoes":
        dispatch(fetchShoeData());
        break;
      case "jewelleries":
        dispatch(fetchJewelleryData());
        break;
      case "bags":
        dispatch(fetchBagsData());
        break;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    setTimeout(() => {
      setDisplayFlag(true);
    }, 2000);
  }, []);

  useEffect(() => {
    let newObj = {};
    switch (category) {
      case "tops":
        newObj = topData && topData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      case "dresses":
        newObj =
          dressesData && dressesData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      case "watches":
        newObj = watchData && watchData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      case "shoes":
        newObj = shoesData && shoesData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      case "jewelleries":
        newObj =
          jewelleriesData &&
          jewelleriesData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      case "bags":
        newObj = bagData && bagData.products.find((obj) => obj.id == id);
        dispatch(selectObj(newObj));
        break;
      default:
        break;
    }
  }, [
    topData,
    dressesData,
    watchData,
    shoesData,
    jewelleriesData,
    bagData,
    category,
    id,
    dispatch,
  ]);

  function decreaseIndex() {
    setImgIndex((prev) =>
      prev == 0 ? selectedObj.images.length - 1 : prev - 1
    );
  }

  function increaseIndex() {
    setImgIndex((prev) =>
      prev == selectedObj.images.length - 1 ? 0 : prev + 1
    );
  }

  function handleAddClick() {
    let newObj = { ...selectedObj };
    newObj.quantity = quantity;
    dispatch(addInCart(newObj));
  }

  useEffect(() => {
    if (selectedObj?.images?.length) {
      selectedObj.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [selectedObj]);
  return (
    <>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJsd28wcTYyeDJoaW54MWZ5ZWZrZHp0aGp1Z2s3cXJudXp1OG1xeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKrVbQSUiXzWi0U/giphy.gif"
        alt="image not found"
        className={`h-200 relative bottom-22 p-30 m-auto ${
          DisplayFlag ? "hidden " : ""
        }`}
      />
      {!loading && selectObj && (
        <div className="flex py-20 px-10 font-heading justify-around">
          <div className="w-1/3 h-160 flex items-center justify-center ">
            <button
              className="cursor-pointer hover:bg-[#41403e44] rounded-md"
              onClick={() => {
                decreaseIndex();
              }}
            >
              <Icon
                path={mdiArrowLeftThin}
                size={2}
              />
            </button>
            <img
              src={selectedObj.images[imgIndex]}
              alt="image not found"
            />
            <button
              className="cursor-pointer hover:bg-[#41403e44] rounded-md"
              onClick={() => {
                increaseIndex();
              }}
            >
              <Icon
                path={mdiArrowRightThin}
                size={2}
              />
            </button>
          </div>
          <div className=" w-2/5 p-10">
            <p className="text-4xl font-bold text-[#C8651B] tracking-wide ">
              {selectedObj.title}
            </p>
            <div className="flex items-center gap-2 py-1 font-bold text-3xl tracking-widest">
              <p className="text-[#423C3A]">
                ₹{Math.round(selectedObj.price * 70)}
              </p>
              <p className="text-[#6C6B6A] line-through text-xl">
                ₹{Math.round(selectedObj.price * 70 + 800)}
              </p>
            </div>
            <div className="border-b-3 my-6 border-grey"></div>
            <p className="text-2xl tracking-wider mb-10">
              {selectedObj.description}
            </p>

            <div className="flex gap-2 my-1">
              <p className="text-2xl tracking-wider font-bold">Dimensions:</p>
              <p className="text-2xl text-[#454341] tracking-wider ">
                <span className="pr-2">
                  width: {selectedObj.dimensions.width},
                </span>
                <span className="pr-2">
                  height: {selectedObj.dimensions.height},
                </span>
                <span className="">depth: {selectedObj.dimensions.depth}</span>
              </p>
            </div>
            <div className="flex gap-2 my-1">
              <p className="text-2xl tracking-wider font-bold">Rating:</p>
              <p className="text-2xl text-[#454341] tracking-wider ">
                {selectedObj.rating}/5
              </p>
            </div>
            <div className="px-7 my-2">
              <ul>
                <li className="list-disc text-2xl text-[#454341] tracking-wider">
                  {selectedObj.shippingInformation}
                </li>
                <li className="list-disc text-2xl text-[#454341] tracking-wider">
                  {selectedObj.warrantyInformation}
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-2xl tracking-wider font-bold my-5">
                Quantity:
              </p>
              <div className="flex gap-1 text-2xl ">
                <button
                  onClick={() => {
                    setQuantity((state) => (state > 1 ? state - 1 : 1));
                  }}
                  className="border-2 rounded-sm py-1 px-2 bg-gray-300 cursor-pointer"
                >
                  -
                </button>
                <input
                  className="w-15 border-2 rounded-sm text-[#C8651B] border-grey text-center"
                  type="text"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    setQuantity((state) => state + 1);
                  }}
                  className="border-2 py-1 px-2 rounded-sm bg-gray-300 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-start">
              <button
                onClick={handleAddClick}
                className="text-3xl w-2/5 border-2 py-2 my-4  font-bold text-white rounded-xl bg-[#C8651B] tracking-wide cursor-pointer "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
