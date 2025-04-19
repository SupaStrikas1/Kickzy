import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems } =
      useContext(ShopContext);

  const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src="" className="w-36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1" onClick={window.location.reload}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[.0938rem] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1" onClick={window.location.reload}>
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[.0938rem] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1" onClick={window.location.reload}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[.0938rem] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1" onClick={window.location.reload}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[.0938rem] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <FaSearch onClick={()=>setShowSearch(true)} className={`w-5 cursor-pointer text-4xl ${window.location.pathname==='/collection'?'':'hidden'}`} />

        <div className="group relative">
          <Link onClick={()=>token ? null : navigate('/login')} ><FaUserCircle className="w-5 text-4xl cursor-pointer" /></Link>
          {token && 
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
        </div>

        <Link to="/cart" className="relative">
          <FaShoppingCart className="w-5 min-w-5 text-4xl" />
          <p className="absolute right-[-10px] bottom-[2px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <HiOutlineMenuAlt3
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <MdArrowForwardIos className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-white hover:bg-black"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-white hover:bg-black"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-white hover:bg-black"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-white hover:bg-black"
            to="/contact"
          >
            CONTACTS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
