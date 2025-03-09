import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 w-full p-6 mb-12">
      {/* İletişim Bilgileri */}
      <div className="flex flex-col gap-8 shadow-lg rounded-lg p-8 w-full lg:w-1/2">
        {/* Adres */}
        <div className="flex items-center gap-4">
          <FaLocationDot className="text-primary text-4xl" />
          <div>
            <h1 className="text-lg font-bold">Adres</h1>
            <a
              href="#"
              className=" text-primary hover:text-primaryHover transition duration-300  text-sm"
            >
              Gold Mountain Caddesi No:123, Doğa Manzara, Türkiye
            </a>
          </div>
        </div>

        {/* Telefon */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-primary text-4xl" />
          <div>
            <h1 className="text-lg font-bold">Telefon</h1>
            <a
              href="tel:+902121234567"
              className=" text-primary hover:text-primaryHover transition duration-300  text-sm"
            >
              +90 (212) 123 45 67
            </a>
          </div>
        </div>
        {/* WhatsApp */}
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-primary text-4xl" />
          <div>
            <h1 className="text-lg font-bold">Telefon</h1>
            <a
              href="tel:+902121234567"
              className=" text-primary hover:text-primaryHover transition duration-300  text-sm"
            >
              +90 (212) 123 45 67
            </a>
          </div>
        </div>

        {/* E-Posta */}
        <div className="flex items-start gap-4">
          <MdEmail className="text-primary text-4xl" />
          <div>
            <h1 className="text-lg font-bold">E-Posta</h1>
            <a
              href="mailto:info@eslagoldmountain.com"
              className=" text-primary hover:text-primaryHover transition duration-300   text-sm"
            >
              info@eslagoldmountain.com
            </a>
          </div>
        </div>

        <div className="flex items-start  justify-start gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-primary hover:text-primaryHover transition duration-300   text-2xl"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-primary hover:text-primaryHover transition duration-150   text-2xl"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-primary hover:text-primaryHover transition duration-150   text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Harita */}
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Maps"
          className="w-full h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.475696880602!2d28.97903278036026!3d41.00498898508428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd625a1a39%3A0x29c5371ef9eb5b86!2sSultanahmet%2C%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
