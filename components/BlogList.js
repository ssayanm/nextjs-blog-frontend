import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
