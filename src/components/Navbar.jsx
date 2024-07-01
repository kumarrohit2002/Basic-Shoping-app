import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" bg-black text-white py-2 flex justify-center">
        <div className="flex flex-row justify-between w-8/12">
            <NavLink to={'/'}>
                <div className="w-[130px]">
                    <img src="https://ecomzy-shopping-cart.vercel.app/logo.png" alt="" />
                </div>
            </NavLink>
            <div className="flex flex-row gap-x-5 text-2xl justify-center items-center">
                <NavLink to={'/'}>
                    <p>Home</p>
                </NavLink>
                <NavLink to={'/Cart'}>
                    <FaShoppingCart/>
                </NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar;