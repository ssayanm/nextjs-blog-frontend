import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // const { value, children } = props;
  useEffect(() => {
    setLoading(true);

    // async function getProducts() {
    //   try {
    //     const response = await axios.get(`${process.env.url}/products/`);
    //     const products = response.data;

    //     setProducts(products);
    //     setLoading(false);
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
