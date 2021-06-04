import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops....</h1>
      <h2> Page cannot be found</h2>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export default NotFound;
