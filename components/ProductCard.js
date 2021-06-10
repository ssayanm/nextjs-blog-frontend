import Link from "next/link";
import Image from "next/image";

import { getStrapiMedia } from "../media";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ id, title, slug, description, shortdescription }) => {
  return (
    <div className="flex items-center flex-col h-full border border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-xl font-bold  mb-3">{title}</h1>
        <p className="leading-relaxed mb-3">{shortdescription}</p>
        <div className="flex items-center flex-wrap">
          <Link href={`/products/${slug}`} key={id}>
            <a className="text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
              Learn More <FaArrowRight className="w-3 h-3 ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
