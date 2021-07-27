import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    // async function fetchData() {
    //   try {
    //     const res = await fetch(`${process.env.url}/products/`);
    //     const products = await res.json();
    //     setProducts(products);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    const getProducts = async () => {
      try {
        const response = await axios.get(`${process.env.url}/products/`);
        const products = response.data;
        setProducts(products);
        setLoading(false);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getProducts();

    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
