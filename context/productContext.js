import { useEffect, createContext, useState } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";

export const ProductContext = createContext();

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_API_URL}/products/`);
//     const products = res.data;
//     // setBlogs(blogs);

//     return { props: { products } };
//   } catch (error) {
//     return { error };
//   }
// };

// const ProductProvider = (props) => {
//   //   const [loading, setLoading] = useState(false);
//   //   const [blogs, setBlogs] = useState([]);
//   const { value, children } = props;

//   return (
//     <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
//   );
// };

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_API_URL}/products/`);
//     const products = res.data;
//     // setBlogs(blogs);
//     setProducts(products);
//     console.log(products);
//     setLoading(false);
//     return { props: { products } };
//   } catch (error) {
//     return { error };
//   }
// };

// export async function getStaticProps() {
//   //   const { slug } = params;

//   const res = await axios.get(`${process.env.NEXT_API_URL}/products/`);
//   const products = res.data;
//   return { props: { products } };
// }

// console.log(products);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // const { value, children } = props;
  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.url}/products/`).then((response) => {
      const products = response.data;
      console.log(products);
      setProducts(products);
      setLoading(false);
    });
    return () => {};
  }, []);

  // const getStaticProps = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:1347/products/`);
  //     const products = res.data;
  //     // setBlogs(blogs);
  //     setProducts(products);

  //     return { props: { products } };
  //   } catch (error) {
  //     return { error };
  //   }
  // };

  // console.log(products);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// export function useproductContext() {
//   return useContext(ProductContext);
// }
