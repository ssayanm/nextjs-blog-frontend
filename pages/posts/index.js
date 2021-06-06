import axios from "axios";
import Link from "next/link";
import BlogList from "../../components/BlogList";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_API_URL}/blogs/`);
    const blogs = res.data;
    return { props: { blogs } };
  } catch (error) {
    return { error };
  }
};

const index = ({ blogs }) => {
  return (
    <div>
      {/* loop over the posts and show them */}
      {blogs &&
        blogs.map((post) => (
          <Link href={`posts/${post.slug}`} key={post.id}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default index;
