import React, { useState } from "react";
import Link from "next/link";

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
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
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
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
              //   class="h-6 w-6"
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
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
              <Link href="/services">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white  text-gray-800"
                      : "text-gray-800 ") + " navlinks"
                  }
                >
                  Services
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
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-base font-bold uppercase px-4 py-2 rounded shadow flex justify-center items-center hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 hover:bg-orange-600 hover:text-white "
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="ml-1 text-xl  font-bold tracking-wider ">
                  (012)-555-999
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
