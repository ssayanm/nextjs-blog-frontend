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
export async function getServerSideProps({ params }) {
  //   const { slug } = params;

  const res = await fetch(`${process.env.NEXT_API_URL}/products/`);
  const data = await res.json();
  // console.log(data);
  const products = data[0];

  return {
    props: { products },
  };
}

const prod = ({ products }) => {
  //   const { products } = useContext(ProductContext);

  console.log(products);
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
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default prod;
