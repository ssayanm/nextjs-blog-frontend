import Link from "next/link";
import { FaArrowRight, FaUserAstronaut } from "react-icons/fa";
import Meta from "../components/Meta";

const About = () => {
  return (
    <section className="py-52 bg-black text-white">
      <Meta title="About" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center">
          <div
            className="w-full lg:w-6/12 px-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2 className="text-4xl font-semibold uppercase">About Us</h2>
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
            <div class="flex flex-col sm:flex-row mt-20">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <FaUserAstronaut className="w-10 h-10 text-orange-500" />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4  text-lg">
                    Phoebe Caulfield
                  </h2>
                  <div class="w-12 h-1 bg-orange-600 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <Link href={`/contact`}>
                  <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                    Learn More <FaArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
