import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div>
        <h1>hello soumi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          minus eum? Expedita necessitatibus animi ipsam numquam quis officiis
          amet molestiae natus, quidem temporibus tenetur dolor! Corporis
          laudantium saepe optio.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          minus eum? Expedita necessitatibus animi ipsam numquam quis officiis
          amet molestiae natus, quidem temporibus tenetur dolor! Corporis
          laudantium saepe optio.
        </p>
        <Link href="/posts">
          <a>See Lisitng</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
