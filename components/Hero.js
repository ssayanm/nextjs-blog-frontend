import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
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
            <div>
              <h1
                className="text-white font-semibold text-6xl"
                data-aos="zoom-in"
              >
                Your fitness starts with
                <span className="text-orange-600"> us.</span>
              </h1>

              <p
                className="mt-4 text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Welcome to The Fitness Zone. A one stop solution for all your
                fitness needs. We focus on pushing you to your absolute limit.
                Download our complete brochure to get started today! For any
                queries feel free to contact us.
              </p>
              <Link href="/">
                <a className="btn" data-aos="fade-up" data-aos-delay="800">
                  Download Brochure
                </a>
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
