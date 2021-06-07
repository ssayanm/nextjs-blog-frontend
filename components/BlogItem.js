import Link from "next/link";

const BlogItem = ({ id, title, slug, content, author }) => {
  return (
    <Link href={`/posts/${slug}`} key={id}>
      <a>
        <h3>{title}</h3>
        <p>{author}</p>
      </a>
    </Link>
  );
};

export default BlogItem;
