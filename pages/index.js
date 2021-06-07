import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-16 py-6">
      <div className="flex justify-center md:justify-end">
        <a href="#">Log in</a>
        <a href="#" className="ml-4">
          Sign up
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-4xl">Recipes</h2>
        <h3>For Ninjas</h3>
      </header>

      <div>
        <h4 className="mt-12 pb-2 border-b border-red-200">Latest Recipes</h4>

        <div className="mt-8">
          <div className="bg-white rounded overflow-hidden shadow">
            <Image
              src="/phoenix-framework.svg"
              alt="site logo"
              width={128}
              height={77}
            />

            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4>Most Popular</h4>

        <div></div>
      </div>

      <div className="flex justify-center">
        <div>Load more</div>
      </div>

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
    </section>
  );
}
