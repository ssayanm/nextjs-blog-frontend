import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next Js Blog | About</title>
        <meta name="keywords" content="Sayan's blog" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          laboriosam dolorum temporibus commodi odit autem nesciunt. Facilis,
          architecto quod animi praesentium illo porro qui illum? Tenetur
          aliquid esse magnam tempore!
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
