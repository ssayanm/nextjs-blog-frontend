import Link from "next/link";

const BlogDetails = ({ id, title, slug, content, author }) => {
  return (
    <Link href={`/posts/${slug}`} key={id}>
      <a>
        <h3>{title}</h3>
        <h3>{content}</h3>
        <p>{author}</p>
      </a>
    </Link>
  );
};

export default BlogDetails;
