import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    console.log(bestProduct.slice(0, 5));

    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Title text1="BEST" text2="SELLERS" />
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
          These exceptional shoes have earned their place as customer favorites
          through outstanding quality, unmatched comfort, and timeless style.
          Join thousands of satisfied customers who've made these their go-to
          choice for premium footwear.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {bestSeller.map((item) => (
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

export default BestSeller;
