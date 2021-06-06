import axios from "axios";
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
      <BlogList blogs={blogs} />
    </div>
  );
};

export default index;
