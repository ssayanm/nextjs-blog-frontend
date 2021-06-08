import Link from "next/link";
import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";

import BlogList from "../components/BlogList";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />

      <BlogList />
    </div>
  );
}
