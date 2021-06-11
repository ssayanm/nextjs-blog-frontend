import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList = ({ products, showLink }) => {
  return (
    <section className="py-32 bg-black text-white">
      <div
        className="container px-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">Our Products</h2>
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
          </div>
        </div>

        {/* Product Card Wrapper*/}
        <div className="flex flex-wrap">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
        <div className="flex justify-center lg:mt-24">
          {showLink && (
            <Link href="/product-posts" className="btn">
              <a className="btn">Read More</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
