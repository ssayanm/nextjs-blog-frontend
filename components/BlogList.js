import BlogDetails from "./BlogDetails";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs && blogs.map((blog) => <BlogDetails key={blog.id} {...blog} />)}
    </div>
  );
};

export default BlogList;
