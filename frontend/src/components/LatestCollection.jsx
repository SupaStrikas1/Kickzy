import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
          Our latest collection features meticulously crafted shoes that blend
          timeless elegance with contemporary design. Each piece represents the
          pinnacle of comfort, durability, and style for the discerning
          professional.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            _id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
