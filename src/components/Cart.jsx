import Icon from "@mdi/react";
import { mdiCreditCard } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
  resetCart,
} from "../features/cart/cartSlice";
import { useEffect, useState } from "react";

export default function Cart() {
  let data = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [priceSum, setPriceSum] = useState(0);
  const [displayFlag, setDisplayFlag] = useState(false);

  useEffect(() => {
    let price = 0;
    data.forEach((item) => {
      price = Math.round(price + item.price * 70 * item.quantity);
    });
    setPriceSum(price);
  }, [data]);

  function submitFunc() {
    if (data.length != 0) {
      setDisplayFlag(true);
      dispatch(resetCart());
      setTimeout(() => {
        setDisplayFlag(false);
      }, 2000);
    } else {
      alert("The cart is empty!");
    }
  }

  function CartProduct({ item }) {
    return (
      <div className="border-4 border-[#C8651B] flex items-center h-50 sm:h-66 rounded-2xl my-3 sm:my-10 w-4/5 sm:ml-20">
        <div className="relative w-60 ">
          <img
            src={item.thumbnail}
            alt="image not found"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="font-heading font-semibold w-full">
          <p className="text-xl sm:text-3xl mb-1">{item.title}</p>
          <p className="text-lg sm:text-2xl mb-2">
            ₹ {Math.round(item.price * 70)}
          </p>
          <div className="flex items-center text-xl sm:text-2xl sm:gap-1 mb-2">
            <button
              onClick={() => {
                dispatch(decreaseQuantity(item.id));
              }}
              className="bg-[#C8651B] w-10  font-heading rounded-md cursor-pointer"
            >
              -
            </button>
            <input
              type="text"
              className="w-10 text-center  "
              value={item.quantity}
              disabled
            />
            <button
              onClick={() => {
                dispatch(increaseQuantity(item.id));
              }}
              className="bg-[#C8651B] w-10 font-heading rounded-md cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(deleteFromCart(item.id));
            }}
            className="text-lg sm:text-xl w-4/6 sm:w-35 border-2 py-1 sm:py-2 pb-2 font-semibold text-white rounded-xl bg-[#C8651B] tracking-wideset cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  return displayFlag ? (
    <div className="h-195 flex items-center justify-center ">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#C8651B] font-heading tracking-wider animate-bounce">
        Thanks for shopping with us!
      </h2>
    </div>
  ) : (
    <div className="min-h-200 flex flex-col lg:flex-row items-center lg:items-start lg:my-0 my-10">
      <div className="w-full sm:w-3/4 lg:w-1/2 font-heading tracking-widest 2xl:px-20 2xl:py-25 xl:px-10 xl:py-15 sm:px-0 px-5 flex flex-col  sm:block">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold my-4 sm:ml-20">Cart</h2>
        </div>
        {data.length != 0 ? (
          data.map((item) => (
            <CartProduct
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <p className="text-xl sm:text-3xl md:ml-20">
            Your cart is empty,{" "}
            <Link to={"/shop"}>
              <span className="underline text-[#c8661bb8]">Shop Now!</span>
            </Link>
          </p>
        )}
      </div>
      <div className="w-full sm:w-6/7 lg:w-2/5 m-auto font-heading tracking-widest 2xl:px-20 2xl:py-15 xl:px-10 xl:py-10 sm:px-0 px-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold my-4">Bill</h2>
        <div className="flex justify-between text-lg sm:text-2xl mt-2">
          <p>Subtotal</p>
          <p>₹ {priceSum}</p>
        </div>
        <div className="flex justify-between text-lg sm:text-2xl mt-2">
          <p>Shipping</p>
          <p>₹ {99}</p>
        </div>
        <div className="flex justify-between text-lg sm:text-2xl mt-2">
          <p>Platform fee</p>
          <p>₹ {49}</p>
        </div>
        <div className="flex justify-between text-lg sm:text-2xl mt-2">
          <p>Discount</p>
          <p>0%</p>
        </div>
        <div className="flex justify-between text-2xl sm:text-3xl  font-bold my-5">
          <h2>Total</h2>
          <h2>₹ {priceSum + 99 + 49}</h2>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl my-2">Discount Coupon</h2>
          <div className=" mb-6 flex xl:justify-between lg:justify-center ">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="border-2 w-full px-4 mr-20 rounded-xl text-xl sm:text-2xl border-[#C8651B]"
            />
            <button className="text-xl sm:text-3xl w-2/3 xl:w-1/2 border-2 py-1 sm:py-2 pb-3 font-semibold text-white rounded-xl bg-[#C8651B] tracking-wideset cursor-not-allowed">
              Apply
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold ">Payment Methods</h2>
          <div className="flex sm:gap-4 text-xl sm:text-2xl items-center">
            <Icon
              path={mdiCreditCard}
              size={3}
              className="sm:p-2 p-3"
            />
            <span>All major credit cards accepted</span>
          </div>
        </div>
        <button
          onClick={() => {
            submitFunc();
          }}
          className="text-xl sm:text-3xl w-1/2 sm:w-full py-2 pb-3 my-4  font-semibold text-white rounded-xl bg-[#C8651B] tracking-wide cursor-pointer hover:scale-101 duration-150"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
