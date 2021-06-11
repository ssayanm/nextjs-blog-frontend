import Link from "next/link";
import Image from "next/image";

import { getStrapiMedia } from "../media";
import { FaArrowRight, FaCartPlus } from "react-icons/fa";

const ProductCard = ({
  title,
  slug,
  image,
  description,
  shortdescription,
  price,
}) => {
  return (
    <div className="w-full md:w-3/12  mb-20 px-4 ">
      <div className="flex items-center flex-col  border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
          <p className="leading-relaxed mb-3">{shortdescription}</p>
          <div className="flex items-center flex-wrap justify-between">
            <span className="text-orange-600 font-bold"> ${price}</span>
            <Link href={`/shop/${slug}`}>
              <a className="text-red-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Show Details
                <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
            <Link href={`/shop/${slug}`}>
              <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Add to Cart <FaCartPlus className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
