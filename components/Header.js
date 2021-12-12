import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Script from "next/script";

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full "
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-5"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                "text-base font-bold leading-relaxed flex justify-center items-center mr-4 py-2 whitespace-nowrap uppercase"
              }
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10  p-2  text-white bg-orange-600 rounded-full hover:text-orange-600 hover:bg-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-xl text-white font-bold tracking-wider hover:text-orange-600 ">
                The Fitness Zone
              </span>
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={
                (props.transparent ? "text-white " : "text-gray-800") +
                " w-6 h-6"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center">
            <li className="flex items-center">
              <Link href="/">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Home
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/about">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  About
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/shop">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Shop
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/services">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Our Services
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/posts">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Contact
                </a>
              </Link>
            </li>

            <button
              className={
                (props.transparent
                  ? "snipcart-checkout lg:text-white  text-gray-800"
                  : "snipcart-checkout text-gray-800 ") + " navlinks"
              }
            >
              Cart
            </button>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? " text-orange-600 active:bg-gray-100"
                    : "bg-orange-500 text-white active:bg-orange-600") +
                  "  flex justify-center items-center lg:ml-6 px-4 py-2 rounded bg-transparent border border-orange-600 cursor-pointer transition duration-500 ease-in-out hover:bg-orange-600 hover:text-white "
                }
                data-aos="fade-left"
                data-aos-delay="400"
                // style={{ transition: "all .15s ease" }}
              >
                <FaPhoneAlt />
                <span className="ml-2 text-xl  font-bold tracking-wider ">
                  (012)-555-999
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
