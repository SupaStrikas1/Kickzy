import { React, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 font-medium bg-gradient-to-r from-gray-900 to-gray-950 text-white relative shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center"></div>
        <span className="text-2xl font-bold text-white">Kickzy</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-6 text-sm font-medium relative z-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
              isActive
                ? "text-white underline underline-offset-8 decoration-2"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          <span className="tracking-wider">HOME</span>
          <div className="w-6 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
              isActive
                ? "text-white underline underline-offset-8 decoration-2"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          <span className="tracking-wider">COLLECTION</span>
          <div className="w-6 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
              isActive
                ? "text-white underline underline-offset-8 decoration-2"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          <span className="tracking-wider">ABOUT</span>
          <div className="w-6 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
              isActive
                ? "text-white underline underline-offset-8 decoration-2"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          <span className="tracking-wider">CONTACT</span>
          <div className="w-6 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </NavLink>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-2 relative z-10">
        {/* Search Icon */}
        <button
          onClick={() => setShowSearch(true)}
          className={`p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 ${
            window.location.pathname === "/collection" ? "block" : "hidden"
          }`}
        >
          <Search className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" />
        </button>

        {/* User Profile */}
        <div className="group relative z-50">
          {" "}
          {/* 👈 make sure z-50 is here */}
          <button
            onClick={() => {
              if (!token) return navigate("/login");
              setShowMenu((prev) => !prev);
            }}
            className="flex items-center p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
          >
            <User className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" />
            {token && (
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                  showMenu ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
          {token && showMenu && (
            <div className="absolute right-0 pt-2 z-50">
              {" "}
              {/* 👈 This must have z-50 or higher */}
              <div className="flex flex-col gap-1 w-48 py-3 px-2 bg-white rounded-xl shadow-xl border border-slate-200">
                <button className="text-left px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 font-medium">
                  My Profile
                </button>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/orders");
                  }}
                  className="text-left px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 font-medium"
                >
                  Orders
                </button>
                <hr className="my-1 border-slate-200" />
                <button
                  onClick={() => {
                    logout();
                    setShowMenu(false);
                  }}
                  className="text-left px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Shopping Cart */}
        <Link
          to="/cart"
          className="relative p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
        >
          <ShoppingBag className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
              {getCartCount()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setVisible(true)}
          className="p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 sm:hidden"
        >
          <Menu className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white shadow-2xl transition-all duration-300 ${
          visible ? "w-full sm:w-80" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Kickzy</span>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-lg hover:bg-slate-200 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 py-4">
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `block py-4 px-6 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium tracking-wider ${
                  isActive
                    ? "bg-slate-100 text-slate-900 border-r-4 border-slate-600"
                    : ""
                }`
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `block py-4 px-6 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium tracking-wider ${
                  isActive
                    ? "bg-slate-100 text-slate-900 border-r-4 border-slate-600"
                    : ""
                }`
              }
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `block py-4 px-6 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium tracking-wider ${
                  isActive
                    ? "bg-slate-100 text-slate-900 border-r-4 border-slate-600"
                    : ""
                }`
              }
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `block py-4 px-6 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium tracking-wider ${
                  isActive
                    ? "bg-slate-100 text-slate-900 border-r-4 border-slate-600"
                    : ""
                }`
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setVisible(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
