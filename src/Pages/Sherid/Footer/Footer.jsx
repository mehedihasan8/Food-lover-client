import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-20 p-10 bg-slate-800 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col lg:pl-10 ">
          <h1 className="font-semibold text-xl">Meno links</h1>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">About</a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">Contact</a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Usefull link
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">Blog</a>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-semibold text-xl">Merchent </h1>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Courier Merchant sing up
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Courier Merchant Login
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Car Admiral Login
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Resto Merchant sing up
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Resto Merchant Login
          </a>
        </div>
        <div className="flex flex-col mt-4 lg:mt-0 ">
          <h1 className="font-semibold text-xl">Information</h1>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">About us</a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Delivery information
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Privacy Policy
          </a>
          <a className="link link-hover pt-3 lg:pl-3 text-left ">
            Tetms & Conditons
          </a>
        </div>
        <div className="mt-4 lg:mt-0">
          <h1 className="font-semibold text-xl">Contact Us</h1>
          <div className="flex gap-4  mt-4">
            <a className="link link-hover pt-3  mx-0 my-0 h-10 w-10 bg-purple-600 rounded-md hover:bg-purple-700 text-white ">
              <FaFacebook className="mx-auto" />
            </a>
            <a className="link link-hover pt-3  mx-0 my-0 h-10 w-10 bg-purple-600 rounded-md hover:bg-purple-700 text-white ">
              <FaInstagram className="mx-auto" />
            </a>
            <a className="link link-hover pt-3  mx-0 my-0 h-10 w-10 bg-purple-600 rounded-md hover:bg-purple-700 text-white ">
              <FaTwitter className="mx-auto" />
            </a>
            <a className="link link-hover pt-3  mx-0 my-0 h-10 w-10 bg-purple-600 rounded-md hover:bg-purple-700 text-white ">
              <FaYoutube className="mx-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <p>Copyright © 2023 - All right reserved by Food Lover LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
