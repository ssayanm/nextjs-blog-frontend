import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);

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
