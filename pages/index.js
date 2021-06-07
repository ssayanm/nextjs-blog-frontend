import Link from "next/link";
import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
    </div>
  );
}
