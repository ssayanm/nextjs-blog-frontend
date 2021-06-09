import Link from "next/link";
import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar.js";

import BlogList from "../components/BlogList";
import Services from "../components/Services";
import Info from "../components/Info";
import Trainers from "../components/Trainers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Trainers />

      <BlogList />
    </div>
  );
}
