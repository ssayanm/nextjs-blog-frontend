import { useEffect, useState } from "react";
import ProductProvider from "../context/productContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: false,
      delay: 200,
      duration: 1200,
      offset: 50,
    });
  }, []);

  // const { products } = pageProps;
  // const [myProducts] = useState(products);

  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
