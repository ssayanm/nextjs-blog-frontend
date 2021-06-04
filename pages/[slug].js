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

// export const getStaticProps = async (context) => {
//   const id = context.params.slug;

//   const res = await fetch("http://localhost:1347/blogs/" + id);
//   const data = await res.json();

//   return {
//     props: { blogs: data },
//   };
// };

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1347/posts?slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}

const Details = ({ blogs }) => {
  return (
    <div>
      <h1>{blogs.title}</h1>
      <p>{blogs.content}</p>

      <p>{blogs.author}</p>
    </div>
  );
};

export default Details;
