import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/phoenix-framework.svg"
          alt="site logo"
          width={128}
          height={77}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts">
        <a>Blog Posts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
