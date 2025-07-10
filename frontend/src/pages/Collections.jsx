import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronDown, FaFilter } from "react-icons/fa";

import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    console.log("🛠 Products before filtering:", products);
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory
          .map((s) => s.toLowerCase())
          .includes(item.subCategory?.toLowerCase()),
      );
    }

    setFilterProducts(productsCopy);
    console.log(
      "Subcategory values in products:",
      products.map((p) => p.subcategory),
    );
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
    console.log("🪵 Triggered filter with:", {
      category,
      subcategory,
      search,
      products,
    });
  }, [category, subcategory, search, showSearch, products]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-8 pt-12 border-t border-slate-200">
          {/* Filters Sidebar */}
          <div className="w-full sm:min-w-72 sm:max-w-72">
            {/* Filter Header */}
            <div
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-all duration-300 mb-6"
            >
              <div className="flex items-center gap-3">
                <FaFilter className="w-5 h-5 text-slate-600" />
                <span className="text-lg font-semibold text-slate-900">
                  FILTERS
                </span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-300 sm:hidden ${
                  showFilter ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Categories Filter */}
            <div
              className={`bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden transition-all duration-300 ${
                showFilter
                  ? "opacity-100 max-h-96"
                  : "opacity-50 max-h-0 sm:opacity-100 sm:max-h-96"
              }`}
            >
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
                  CATEGORIES
                </h3>
                <div className="space-y-3">
                  {["Men", "Women", "Kids"].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={toggleCategory}
                        checked={category.includes(cat)}
                        className="w-4 h-4 text-slate-600 bg-slate-100 border-slate-300 rounded focus:ring-slate-500 focus:ring-2 transition-all duration-200"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-200 font-medium">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Type Filter */}
            <div
              className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 ${
                showFilter
                  ? "opacity-100 max-h-96"
                  : "opacity-50 max-h-0 sm:opacity-100 sm:max-h-96"
              }`}
            >
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
                  TYPE
                </h3>
                <div className="space-y-3">
                  {["Casuals", "Sports", "X"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        value={type}
                        onChange={toggleSubcategory}
                        checked={subcategory.includes(type)}
                        className="w-4 h-4 text-slate-600 bg-slate-100 border-slate-300 rounded focus:ring-slate-500 focus:ring-2 transition-all duration-200"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-200 font-medium">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Title text1={"ALL"} text2={"COLLECTIONS"} />
                <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                  <span>({filterProducts.length} products)</span>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-2">
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="appearance-none bg-white border-2 border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-300 transition-all duration-200 cursor-pointer min-w-48"
                  >
                    <option value="relevant">Sort by: Relevant</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filterProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {filterProducts.map((item, index) => (
                  <div key={item._id || index} className="h-full">
                    <ProductItem
                      name={item.name}
                      _id={item._id}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaFilter className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  No Products Found
                </h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your current filters.
                  Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => {
                    setCategory([]);
                    setSubcategory([]);
                    setSortType("relevant");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
                >
                  <span>Clear All Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
