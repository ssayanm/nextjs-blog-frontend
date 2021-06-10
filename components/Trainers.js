import Image from "next/image";

const Trainers = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">
              Meet Our Trainers
            </h2>
            <p className="text-lg leading-relaxed m-4">
              Our trainers are are here to dedicate the time and effort that you
              need to get in the best shape of your life
            </p>
          </div>
        </div>
        {/*Trainer Card Wrapper*/}
        <div className="flex flex-wrap">
          {/*Card 1 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col">
              <Image
                alt="Gym"
                src="/trainer1.jpg"
                width={250}
                height={375}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded max-w-full mx-auto"
              />

              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Jenny</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Cupcake Smasher
                </p>
              </div>
            </div>
          </div>
          {/*Card 2 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col">
              <Image
                alt="Gym"
                src="/trainer2.jpg"
                width={250}
                height={375}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded max-w-full mx-auto"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Rocky</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Neighbourhood Watchman
                </p>
              </div>
            </div>
          </div>
          {/*Card 3 */}
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6 flex items-center flex-col">
              <Image
                alt="Gym"
                src="/trainer3.jpg"
                width={250}
                height={375}
                objectFit="cover"
                quality={100}
                className="shadow-lg rounded  mx-auto text-center"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Suzane McDonald</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Double Whoopass With Cheese
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
