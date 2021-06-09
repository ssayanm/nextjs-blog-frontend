import BlogCard from "./BlogCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogList = ({ blogs }) => {
  return (
    <section className="pt-48 pb-48 bg-black text-white">
      {" "}
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
          {blogs.map((blog) => (
            <div
              className="w-full md:w-4/12 lg:mb-0 mb-12 px-4  "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <BlogCard key={blog.id} {...blog} />
            </div>
          ))}
          {/*Card 1 */}
        </div>
        <div className="flex justify-center lg:mt-24">
          <Link href="/">
            <a className="btn">Read More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
