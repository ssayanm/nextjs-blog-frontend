import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
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
      <Link href="/listing">
        <a className={styles.btn}>See Lisitng</a>
      </Link>
    </div>
  );
}
