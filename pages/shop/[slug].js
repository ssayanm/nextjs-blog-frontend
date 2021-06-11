import ProductDetails from "../../components/ProductDetails";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.url}/products/`);
  const data = await res.json();

  // map data to an array of path objects with params (slug or id -> then needs to add toString)
  const paths = data.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// for each individual page: get the data for that page
export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`${process.env.url}/products/?slug=${slug}`);
  const data = await res.json();

  const product = data[0];

  return {
    props: { product },
  };
};

const Details = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Details;
