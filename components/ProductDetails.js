import Image from "next/image";
import { getStrapiMedia } from "../media";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const { title, slug, image, description, shortdescription, price } = product;
  //   console.log(title);
  return (
    <section className="pt-48 pb-48 bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-evenly">
          <Image
            alt="Gym"
            src={getStrapiMedia(image.url)}
            width={400}
            height={400}
            objectFit="cover"
            quality={100}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-3xl title-font font-medium mb-1">{title}</h1>

            <p className="leading-relaxed">{description}</p>

            <p className="title-font font-medium text-2xl mt-3">${price}</p>

            <Link href={`/shop/${slug}`}>
              <a className="btnalt flex justify-center items-center w-1/2">
                Buy Now <FaCartPlus className="w-3 h-3 ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
