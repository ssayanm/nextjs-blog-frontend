import Link from "next/link";
import Image from "next/image";

import { getStrapiMedia } from "../media";
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({ id, title, slug, content, author, image, desc }) => {
  // console.log(API_URL);

  return (
    <div
      className="w-full md:w-4/12 lg:mb-0 mb-12 px-4  "
      data-aos="flip-right"
    >
      <div className="px-6 flex items-center flex-col h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          alt="Gym"
          src={getStrapiMedia(image.url)}
          width={720}
          height={400}
          objectFit="cover"
          quality={100}
          className="shadow-lg rounded max-w-full mx-auto"
        />

        <div className="p-6">
          <h1 className="text-xl font-bold  mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{desc}</p>
          <div className="flex items-center flex-wrap">
            <Link href={`/posts/${slug}`} key={id}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
