import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaVimeoV,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  // FaBars,
  // FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import navMenu from '../utils/NavbarData';

import Logo from '../assets/doc_logo.jpg';

const Navbar = () => (
  <section className="border-r-2 h-screen">
    {/* logo */}
    <div className="p-2">
      <img src={Logo} alt="logo" className="w-52 rounded-md" />
    </div>
    {/* nav menu */}
    <div className="flex flex-col mt-10 ml-4 gap-3">
      {navMenu.map((menu) => (
        <NavLink
          key={menu.id}
          to={menu.path}
          className={({ isActive }) => `text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}`}
        >
          {menu.name}
        </NavLink>
      ))}
    </div>
    {/* socials */}
    <footer className="absolute bottom-10 left-4">
      <div className="flex justify-center gap-4">
        <FaTwitter />
        <FaFacebookF />
        <TiSocialGooglePlus />
        <FaVimeoV />
        <FaPinterestP />
      </div>
      <span className="text-xs">&copy; 2024 microverse final capstone</span>
    </footer>
  </section>
);

export default Navbar;
