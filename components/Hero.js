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
          data-aos="zoom-in"
          data-aos-delay="0"
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
                className="mt-6 mb-4 text-lg text-gray-300"
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
                  Download Our Brochure
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
