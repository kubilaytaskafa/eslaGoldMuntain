import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/headerSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.header.open);

  const handleOpen = () => {
    dispatch(setOpen(false)); // Redux action'ını çağır
  };

  return (
    <div>
      {open ? (
        <motion.div
          className="flex lg:hidden items-center justify-start flex-col w-1/2 h-full top-0 left-0 bg-white shadow-lg shadow-gray-300 z-50 pt-4 border rounded-md fixed"
          initial={{ x: "-100%" }} // Başlangıçta sağda gizli
          animate={{ x: open ? "0%" : "100%" }} // 'open' durumuna göre sağdan gelir
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animasyon ayarları
        >
          {/* Place the motion.ul first */}
          <motion.ul
            className="flex items-start justify-center gap-4 flex-col"
            initial={{ opacity: 0 }} // Başlangıçta görünmez
            animate={{ opacity: open ? 1 : 0 }} // 'open' durumu ile opaklık değişir
            transition={{ duration: 0.3 }}
            // Opaklık animasyonu
            onClick={handleOpen}
          >
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#Home" onClick={handleOpen}>
                Anasayfa
              </a>
            </motion.li>
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#About" onClick={handleOpen}>
                Hakkımızda
              </a>
            </motion.li>
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#Rooms" onClick={handleOpen}>
                Odalar
              </a>
            </motion.li>
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#Services" onClick={handleOpen}>
                Hizmetler
              </a>
            </motion.li>
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#Gallery" onClick={handleOpen}>
                Galerimiz
              </a>
            </motion.li>
            <motion.li className="font-semibold text-base hover:text-primary transition duration-150 cursor-pointer">
              <a href="#Contact" onClick={handleOpen}>
                İletişim
              </a>
            </motion.li>
            <motion.li className="text-center px-[16px] py-[8px] bg-primary text-white text-sm hover:bg-primaryHover transition duration-150 cursor-pointer rounded-md font-semibold">
              <a href="#Rezervation" onClick={handleOpen}>
                Rezervasyon
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Dropdown;
