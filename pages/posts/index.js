import axios from "axios";
import Link from "next/link";
import BlogList from "../../components/BlogList";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/blogs/`);
    const blogs = res.data;
    return { props: { blogs } };
  } catch (error) {
    return { error };
  }
};

const index = ({ blogs }) => {
  return (
    <div className="py-20 bg-black">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default index;
