import axios from "axios";
import React, { useContext } from "react";
import Meta from "../components/Meta";
import { ProductContext } from "../context/productContext";

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:1347/blogs`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
// export async function getStaticProps({ params }) {
//   //   const { slug } = params;

//   const res = await axios.get(`${process.env.url}/products/`);
//   const products = res.data;
//   return { props: { products } };
// }

const prod = () => {
  const { products } = useContext(ProductContext);

  {
    console.log();
  }
  return (
    <section className="py-52 bg-black text-white">
      <Meta title="Services" />
      <div
        className="container px-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">Services Page</h2>
            {products.map((product) => (
              <p className="text-lg leading-relaxed m-4">{product.title}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default prod;
