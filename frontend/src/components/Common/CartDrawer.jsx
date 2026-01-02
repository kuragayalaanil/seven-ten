import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toogleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    toogleCartDrawer();
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:2-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toogleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Component  */}
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Componets of Cart */}
        <CartContents />
      </div>
      {/* Checkout Button  */}
      <div className="bg-white p-4 sticky bottom-0">
        <button
          onClick={handleCheckOut}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>
        <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center ">
          Shipping, taxes, and discount codes are calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
