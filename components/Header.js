import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-24 flex justify-center items-center">
      <nav className="m-0">
        <div className="p4">
          <Image
            src="/phoenix-framework.svg"
            alt="site logo"
            width={128}
            height={77}
          />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Blog Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
