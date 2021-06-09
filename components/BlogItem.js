import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ id, title, slug, content, author, image }) => {
  console.log(`${process.env.NEXT_API_URL}` + image.url);
  return (
    <div className="">
      <Link href={`/posts/${slug}`} key={id}>
        <a>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{content}</p>
        </a>
      </Link>
      <Image
        alt="Gym"
        src={`/${process.env.NEXT_API_URL}` + image.url}
        width={720}
        height={400}
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default BlogItem;
