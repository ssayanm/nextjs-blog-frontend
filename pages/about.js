import React from "react";
import Head from "next/head";
import Meta from "../components/Meta";

const About = () => {
  return (
    <section className="pt-48 pb-48 bg-black text-white">
      <Meta title="about" />
      <div className="container px-4 mx-auto">
        <div>
          <h1>About Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laboriosam dolorum temporibus commodi odit autem nesciunt. Facilis,
            architecto quod animi praesentium illo porro qui illum? Tenetur
            aliquid esse magnam tempore!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
