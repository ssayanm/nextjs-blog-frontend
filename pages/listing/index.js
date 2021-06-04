import styles from "../../styles/Listing.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <div>
      <h1>Listing</h1>
      {ninjas.map((ninja) => (
        <Link href={"/listing/" + ninja.username} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
