import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Meta from "../components/Meta";

const Services = () => {
  return (
    <section className="py-52 bg-black text-white">
      <Meta title="Services" />
      <div
        className="container px-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">Services Page</h2>
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <Link href={`/contact`}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl  font-medium title-font mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <Link href={`/contact`}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl  font-medium title-font mb-2">
              Neptune
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <Link href={`/contact`}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl  font-medium title-font mb-2">
              Melanchole
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <Link href={`/contact`}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:mt-24">
          <Link href="/blog-posts" className="btn">
            <a className="btn">Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
