import Link from "next/link";
import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar.js";
import axios from "axios";
import BlogList from "../components/BlogList";
import Services from "../components/Services";
import Info from "../components/Info";
import Trainers from "../components/Trainers";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_API_URL}/blogs/`);
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

      <BlogList blogs={blogs} />
    </div>
  );
}
