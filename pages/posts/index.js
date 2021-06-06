import styles from "../../styles/Listing.module.css";
import Link from "next/link";
import axios from "axios";
import Meta from "../../components/Meta";

// const { NEXT_API_URL } = process.env;

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
      <h1>Listing</h1>
      {blogs &&
        blogs.map((blog) => (
          <Link href={`/posts/${blog.slug}`} key={blog.id}>
            <a className={styles.single}>
              <h3>{blog.title}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default index;
