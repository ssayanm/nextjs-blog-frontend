import Link from "next/link";
import { MdHome, MdKeyboardArrowDown } from "react-icons/md";
// import CartLink from "../components/cart/CartLink";
// import LoginLink from "../components/LoginLink";

const data = [
  {
    id: 1,
    text: "welcome",
    url: "/",
    icon: <MdHome className="nav-icon" />,
    sub: [],
  },
  {
    id: 2,
    text: "about",
    url: "/about-us",
    sub: [],
  },
  {
    id: 3,
    text: "services",
    url: "/services",
    sub: [],
  },
  // {
  //   id: 2,
  //   text: "Products",
  //   url: "/",
  //   sub: [],
  //   sub: [
  //     {
  //       id: 22,
  //       text: "coaching",
  //       url: "/coaching/",
  //     },
  //   ],
  // },
  {
    id: 4,
    text: "shop",
    url: "/shop",
    sub: [],
  },

  {
    id: 5,
    text: "blog",
    url: "/blog-posts",
    sub: [],
  },
  {
    id: 6,
    text: "contact",
    url: "/contact",
    sub: [],
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link href={link.url} activeClassName="active">
        <a>
          {link.text}
          {link.sub.length > 0 ? (
            <span className="arrow">
              <MdKeyboardArrowDown />
            </span>
          ) : (
            ""
          )}
        </a>
      </Link>
      <ul className="sub-menu">
        {link.sub.map((smenu) => (
          <li key={smenu.id}>
            <Link href={smenu.url} activeClassName="active">
              <a> {smenu.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

const links = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};

export default links;
