import Image from "next/image";
import { FaDumbbell, FaHdd, FaUsers } from "react-icons/fa";

const Info = () => {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              alt="Gym"
              src="/gyminfo.jpg"
              width={640}
              height={960}
              // objectFit="cover"
              quality={100}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <span className="text-xm text-orange-600">About us</span>
              <h3 className="text-4xl uppercase font-bold">
                {" "}
                Safe Body Building
              </h3>
              <p className="mt-4 text-lg leading-relaxed ">
                If you want something you never had, you have to do something
                you’ve never done. Even if you fail on your face. You’re still
                moving forward. Ability is limitless. Be more Do more.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div className="font-semibold inline-block text-orange-600  mr-3">
                      <FaDumbbell className="text-2xl" />
                    </div>

                    <div className="text-xl">
                      The latest & greatest gym equipment
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div className="font-semibold inline-block text-orange-600  mr-3">
                      <FaHdd className="text-2xl" />
                    </div>

                    <div className="text-xl">
                      10-inch, quality foam floor padding
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div className="font-semibold inline-block text-orange-600  mr-3">
                      <FaUsers className="text-2xl" />
                    </div>

                    <div className="text-xl">
                      3 professional female and 2 male trainers
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
