import axios from "axios";
import Link from "next/link";

import ProductList from "../../components/ProductList";

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.url}/products/`);
//     const products = res.data;
//     return { props: { products } };
//   } catch (error) {
//     return { error };
//   }
// };

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.url}/products/`);
  const products = await res.json();

  return {
    props: { products },
  };
};

const index = ({ products }) => {
  return (
    <div className="py-20 bg-black">
      <ProductList products={products} />
    </div>
  );
};

export default index;
