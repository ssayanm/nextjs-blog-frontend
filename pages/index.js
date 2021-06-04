import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Next Js Blog | Home</title>
        <meta name="keywords" content="Sayan's blog" />
      </Head>
      <div>
        <h1 className={styles.title}>hello soumi</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          minus eum? Expedita necessitatibus animi ipsam numquam quis officiis
          amet molestiae natus, quidem temporibus tenetur dolor! Corporis
          laudantium saepe optio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          minus eum? Expedita necessitatibus animi ipsam numquam quis officiis
          amet molestiae natus, quidem temporibus tenetur dolor! Corporis
          laudantium saepe optio.
        </p>
        <Link href="/posts">
          <a className={styles.btn}>See Lisitng</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
