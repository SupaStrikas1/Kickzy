import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ShopContext } from "../context/ShopContext.jsx";

const ProductItem = ({ _id, image, name, price, rating = 4.5 }) => {
  const { currency } = useContext(ShopContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const truncateName = (name, maxLength = 50) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 h-full flex flex-col">
      <Link to={`/product/${_id}`} className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-slate-50 rounded-t-2xl">
          <div className="w-full h-full p-4">
            <img
              src={Array.isArray(image) ? image[0] : image}
              alt={name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : i < rating
                          ? "fill-amber-200 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-500">{rating}</span>
            </div>
          )}

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-medium text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">
            {truncateName(name)}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-base font-semibold text-slate-900">
              {formatPrice(price)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
