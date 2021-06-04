export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1347/blogs/");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:1347/blogs/" + id);
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

const Details = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
      <h1>{blogs.title}</h1>
      <p>{blogs.content}</p>

      <p>{blogs.author}</p>
    </div>
  );
};

export default Details;
