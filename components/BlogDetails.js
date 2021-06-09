import Image from "next/image";
import { getStrapiMedia } from "../media";
import Link from "next/link";

const BlogDetails = ({ blog }) => {
  const { title, content, author, image } = blog;
  //   console.log(title);
  return (
    <section className="pt-48 pb-48 bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-8">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">{title}</h2>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold leading-relaxed">
              {author}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:mb-0 mb-12 px-4" data-aos="flip-right">
            <div className="px-6 flex items-center flex-col">
              <Image
                alt="Gym"
                src={getStrapiMedia(image.url)}
                width={720}
                height={400}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded max-w-full mx-auto"
              />

              <div className="pt-8 pb-8">
                <p className="mt-4 text-sm text-white uppercase font-semibold w-full lg:w-1/2 mx-auto">
                  {content}
                </p>
              </div>
              <Link href="/contact">
                <a className="btn">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
