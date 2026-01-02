import React from "react";
import maleCollectionImg from "../../assets/mens-collection.webp";
import FemaleCollectionImg from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens Collection */}
        <div className="relative flex-1">
          <img
            src={FemaleCollectionImg}
            alt="Womens Collection"
            className="w-full h-[700px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-md">
            <h2 className="text-2xl text-gray-900 font-bold mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collection/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mens Collection */}
        <div className="relative flex-1">
          <img
            src={maleCollectionImg}
            alt="Womens Collection"
            className="w-full h-[700px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-md">
            <h2 className="text-2xl text-gray-900 font-bold mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collection/all?gender=men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
