import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../assets/icon-cart.svg";
import { MdDelete, MdFontDownload, MdShoppingCart } from "react-icons/md";
import { cartActions } from "./store/cartSlice";
import { productImages } from "./ProductImages";
import { IconBase } from "react-icons";

const NavComp: NextComponentType = (props) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showNavTag, setShowNavTag] = useState<boolean>(false)
  const dispatch = useDispatch()


  type itemProps = {
    id: string,
    price: number,
    quantity: number,
    totalPrice: number,
    name: string
  }

  type itemsList = itemProps[]

  type stateProps = {
    cart: {
      itemsList: itemsList,
      totalQuantity: number | null 
    }
  }

  const addToCart = ({ name, id, price, quantity }: itemProps) => {
    dispatch(cartActions.addToCart({ name, id, price, quantity }))
  }

  const removeCart = (id:string) => {
    dispatch(cartActions.removeCart(id))
  }

  const cartItems = useSelector((state: stateProps) => state.cart.itemsList)
  const cart = useSelector((state: stateProps) => state.cart)

  console.log(cartItems)

  return (
    <div className="sm:fixed z-10 box-border flex flex-row items-center justify-between w-4/5 py-5 m-auto border-b sm:bg-white border-grayishblue sm:w-full sm:px-10">
      {/* Logo */}
      <div className="navRightSide">
        <div onClick={() => { setShowNavTag(true) }} className="harmBurgerWrapper">
          <span className="harmBurger"></span>
        </div>
        <div>Logo</div>

        {/* Nav */}
        <nav className={`navTag ${showNavTag && "showNavTag"}`}>
          <div onClick={() => { setShowNavTag(false) }} className="closeHarmburger">
            <span>x</span>
          </div>
          <ul className={`navUl`}>
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
        <div className="relative">
          <Image
            className="hover:cursor-pointer"
            width={20}
            height={20}
            src={require("../assets/icon-cart.svg")}
            alt="Profile Pics"
            onClick={() => setShowCart(!showCart)}
          />
          <div className="absolute -top-2 -right-2 text-xs bg-orange px-1 py-0 rounded-full text-white">
            {cart.totalQuantity}
          </div>
          {/* Cart Items */}
          {
            showCart &&
            <div className="cartViewWrapper">
              <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
                <div className="p-5 border-b hover:cursor-pointer border-grayishblue">
                  Cart
                </div>

                <div className="flex flex-col px-0 py-5 h-[13rem] items-center justify-center">
                  {cartItems.length > 0 && 
                    cartItems.map((item, index) =>

                    <div key={index} className="flex  w-10/12 items-center justify-between">
                      <div className="">
                        <Image
                          width={50}
                          height={50}
                          src={productImages["one"]}
                          alt="Profile Pics"
                        />
                      </div>

                      <div className="">
                        <h3>Autumn Fall limited Edition</h3>
                        <span>$125 x {item.quantity} <b>${item.price * item.quantity}.00</b> </span>
                      </div>

                      <div onClick={() => removeCart(item.id)}>
                        <MdDelete size={20} />
                      </div>
                    </div>
                  )}
                  <p className="text-grayishblue">

                    {
                      !cartItems.length && "Your Cart Is Empty"}
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
