import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // const { value, children } = props;
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const res = await fetch(`${process.env.url}/products/`);
        const products = await res.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    }

    // async function fetchData() {
    //   try {
    //     const result = await axios
    //       .get(`${process.env.url}/products/`)
    //       .then((response) => {
    //         const products = response.data;

    //         setProducts(products);
    //         setLoading(false);
    //       });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    axios.get(`${process.env.url}/products/`).then((response) => {
      const products = response.data;

      setProducts(products);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
