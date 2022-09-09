import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "../assets/icon-cart.svg";
import { MdShoppingCart } from "react-icons/md";

const NavComp: NextComponentType = (props) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <div className="box-border flex flex-row items-center justify-between w-4/5 py-5 m-auto border-b border-grayishblue">
      {/* Logo */}
      <div className="navRightSide">
        <div className="harmBurgerWrapper">
          <span className="harmBurger"></span>
        </div>
        <div>Logo</div>

        {/* Nav */}
        <nav className="w-4/6 md:w-5/6">


          <ul className="flex justify-between w-full sm:bg-red-500 text-grayishblue">
            <li
              onClick={() => setActiveLink("collection")}
              className={`relative ${activeLink === "collection" && "activeLink"} navLink`}
            >
              <Link href="/collections">Collections</Link>
            </li>
            <li
              onClick={() => setActiveLink("men")}
              className={`relative ${activeLink === "men" && "activeLink"} navLink`}
            >
              <Link href="/men">Men</Link>
            </li>
            <li
              onClick={() => setActiveLink("women")}
              className={`relative ${activeLink === "women" && "activeLink"} navLink`}
            >
              <Link href="/women">Women</Link>
            </li>
            <li
              onClick={() => setActiveLink("about")}
              className={`relative ${activeLink === "about" && "activeLink"} navLink`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={() => setActiveLink("contact")}
              className={`relative ${activeLink === "contact" && "activeLink"} navLink`}
            >
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between w-32 sm:w-24">
        <div>
          <Image
            className="hover:cursor-pointer"
            width={20}
            height={20}
            src={require("../assets/icon-cart.svg")}
            alt="Profile Pics"
            onClick={() => setShowCart(!showCart)}
          />
          {/* Cart Items */}
          {
            showCart &&
            <div className="cartViewWrapper">
              <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
                <div className="p-5 border-b hover:cursor-pointer border-grayishblue">
                  Cart
                </div>

                <div className="flex px-5 py-5 h-[13rem] items-center justify-center">
                  <p className="text-grayishblue">
                    Your Cart Is Empty
                  </p>
                </div>
              </div>
            </div>
          }

        </div>

        <div className="hoverPPix">
          <Image
            width={50}
            height={50}
            src={require("../assets/image-avatar.png")}
            alt="Profile Pics"
          />
        </div>
      </div>
    </div>
  );
};

export default NavComp;
