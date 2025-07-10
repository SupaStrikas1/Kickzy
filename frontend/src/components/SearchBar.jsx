import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    <div
      className={`border-t border-b bg-gray-50 text-center ${showSearch ? "" : "hidden"}`}
    >
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-[50%]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          name=""
          id=""
        />
        <FaSearch className="w-4" />
      </div>
      <RxCross2
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
        className="inline w-4 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
