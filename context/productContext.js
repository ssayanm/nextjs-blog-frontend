import { useEffect, createContext, useState } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // const { value, children } = props;
  useEffect(() => {
    setLoading(true);
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
