import { useContext } from "react";
import Meta from "../components/Meta";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/productContext";

const prod = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="py-20 bg-black text-white">
      <Meta title="Shop" />

      <ProductList products={products} />
    </div>
  );
};

export default prod;
