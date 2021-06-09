import BlogItem from "./BlogItem";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogList = ({ blogs }) => {
  return (
    <section className=" pt-20 pb-48 bg-black text-white">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">Our Blog</h2>
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
          </div>
        </div>
        {/* Blog Card Wrapper*/}
        <div className="flex flex-wrap">
          {/*Card 1 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4  "
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                alt="Gym"
                src="/trainer1.jpg"
                width={720}
                height={400}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded max-w-full mx-auto"
              />

              <div className="p-6">
                <h1 className="text-xl font-bold  mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                    Learn More <FaArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Card 2 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                alt="Gym"
                src="/trainer2.jpg"
                width={720}
                height={400}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded max-w-full mx-auto"
              />
              <div className="p-6">
                <h1 className="text-xl font-bold  mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More <FaArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Card 3 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                alt="Gym"
                src="/trainer3.jpg"
                width={720}
                height={400}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded  mx-auto text-center"
              />
              <div className="p-6">
                <h1 className="text-xl font-bold  mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-orange-600 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More <FaArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-24">
          <Link href="/">
            <a className="btn">Download Brochure</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
