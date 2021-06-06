import Link from "next/link";

const BlogDetails = ({ id, title, slug }) => {
  return (
    <Link href={`/posts/${slug}`} key={id}>
      <a>
        <h3>{title}</h3>
      </a>
    </Link>
  );
};

export default BlogDetails;
