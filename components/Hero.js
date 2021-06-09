import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <Image
          alt="Gym"
          src="/gym.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-60 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Your story starts with us.
              </h1>

              <p className="mt-4 text-lg text-gray-300">
                This is a simple example of a Landing Page you can build using
                Tailwind Starter Kit. It features multiple CSS components based
                on the Tailwindcss design system.
              </p>
              <Link href="/">
                <a className="btn">Download Brochure</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
