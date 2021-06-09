import Image from "next/image";
import { getStrapiMedia } from "../media";

const BlogDetails = ({ blog }) => {
  const { title, content, author, image } = blog;
  //   console.log(title);
  return (
    <section className="pt-48 pb-48 bg-black text-white">
      <div className="container px-4 mx-auto flex justify-center items-center flex-col">
        <Image
          alt="Gym"
          src={getStrapiMedia(image.url)}
          width={720}
          height={400}
          objectFit="cover"
          quality={100}
          className="shadow-lg rounded max-w-full mx-auto"
        />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
