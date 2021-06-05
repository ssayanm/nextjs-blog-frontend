export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1347/blogs/");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1347/blogs?slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}

const Details = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <p>{post.author}</p>
    </div>
  );
};

export default Details;
