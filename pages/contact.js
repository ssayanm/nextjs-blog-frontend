// import axios from "axios";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <section className="py-52 bg-black text-white">
      <Meta title="Contact" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div
            className="w-full lg:w-6/12 px-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2 className="text-4xl font-semibold uppercase">Contact Us</h2>
            <p className="text-lg leading-relaxed m-4">
              Learn all the expert tips from all our experienced trainers.
              <br /> "The difference between the impossible and the possible
              lies in a person's determination." - Tommy Lasorda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
