import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/headerSlice"; // Redux action'ını import et
import Dropdown from "./Dropdown";

const Header = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.header.open);

  // Dropdown menüsünün açılıp kapanmasını sağlayacak fonksiyon
  const handleOpen = () => {
    dispatch(setOpen(!open)); // Redux action'ını çağır
  };

  return (
    <nav className="flex items-center justify-between gap-x-4 lg:gap-x-2 lg:p-4 p-2 shadow-md w-full bg-white h-[80px] shadow-gray-300 fixed top-0 z-50 left-0 lg:px-44 ">
      <div className="flex items-start justify-center flex-col lg:w-1/2 w-2/3 md:gap-x-6  ">
        <h1 className="text-xl text-primary font-medium w-full">
          ESLA GOLD MOUNTAIN
        </h1>
        <p className="text-left text-gray-500 text-sm">LUXURY HOTEL & RESORT</p>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <ul className="flex items-center justify-center gap-x-4">
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#Home"> Anasayfa</a>
          </li>
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#About"> Hakkımızda</a>
          </li>
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#Rooms"> Odalar</a>
          </li>
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#Services"> Hizmetlerimiz</a>
          </li>
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#Gallery"> Galerimiz</a>
          </li>
          <li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
            <a href="#Contact"> İletişim</a>
          </li>
          <li className="text-center px-[16px] py-[8px] bg-primary text-white text-sm hover:bg-primaryHover transition duration-150 cursor-pointer rounded-md font-semibold">
            <a href="#Reservation"> Rezervasyon</a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden mr-5 transition duration-300">
        {open ? (
          <IoCloseOutline
            className="text-4xl cursor-pointer text-primary hover:text-primaryHover transition duration-300"
            onClick={handleOpen} // handleOpen fonksiyonunu kullan
          />
        ) : (
          <IoMenu
            className="text-4xl cursor-pointer text-primary hover:text-primaryHover transition duration-300 mr-2"
            onClick={handleOpen} // handleOpen fonksiyonunu kullan
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
