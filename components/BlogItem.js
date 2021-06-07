import Link from "next/link";

const BlogItem = ({ id, title, slug, content, author }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Link href={`/posts/${slug}`} key={id}>
        <a>
          <h3>{title}</h3>
          <p>{author}</p>
        </a>
      </Link>
    </div>
  );
};

export default BlogItem;
