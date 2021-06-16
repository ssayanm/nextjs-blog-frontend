import Hero from "../components/Hero";
import axios from "axios";
import BlogList from "../components/BlogList";
import Info from "../components/Info";
import Trainers from "../components/Trainers";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/blogs/`);
    const blogs = res.data;
    return { props: { blogs } };
  } catch (error) {
    return { error };
  }
};

export default function Home({ blogs }) {
  return (
    <div>
      <Hero />
      <Info />
      <Trainers />
      <BlogList blogs={blogs} showLink />
    </div>
  );
}
