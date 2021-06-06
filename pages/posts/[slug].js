import BlogDetails from "../../components/BlogDetails";
import BlogList from "../../components/BlogList";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/blogs/`);
  const data = await res.json();

  // map data to an array of path objects with params (slug or id -> then needs to add toString)
  const paths = data.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_API_URL}/blogs/?slug=${slug}`);
  const data = await res.json();
  // console.log(data);
  const post = data[0];

  return {
    props: { post },
  };
}

const Details = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Details;
