import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../media";
import { FaArrowRight, FaCartPlus } from "react-icons/fa";

const ProductCard = ({ id, title, slug, image, shortdescription, price }) => {
  return (
    <div className="w-full md:w-6/12  lg:w-3/12 mb-20 px-4 ">
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
          <span className="text-white font-bold "> ${price}</span>
          <div className="flex items-center flex-wrap justify-between mt-3">
            <Link href={`/shop/${slug}`}>
              <a className="text-red-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                Show Details
                <FaArrowRight className="w-3 h-3 ml-2" />
              </a>
            </Link>
            <button
              className={`snipcart-add-item text-orange-600 inline-flex items-center font-bold md:mb-2 lg:mb-0`}
              data-item-id={id}
              data-item-name={title}
              data-item-price={price}
              data-item-url={slug}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
