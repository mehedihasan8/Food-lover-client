import React from "react";
import about from "../../../../public/image/about.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <div className="max-w-6xl  p-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center text-4xl md:text-5xl font-bold my-6 pb-9">
        About Us
      </h2>
      <div className=" md:flex items-center justify-evenly gap-10 md:ml-10 ">
        <div className="mb-4 md:mb-0">
          <LazyLoadImage
            height={""}
            width={""}
            src={about}
            alt="Chef in kitchen"
            className="w-full rounded-md"
          />
        </div>
        <div className="bg-slate-200 p-6 rounded-xl">
          {/* <p className=" font-bold text-2xl text-purple-400  mb-7">
            Welcome to our chef website!
          </p> */}
          <p className="mb-4 leading-7 text-black font-semibold">
            <span className="text-lg font-bold text-purple-600">
              Expert preparation techniques : {""}
            </span>
            Food Lover employs expert chefs and bakers who use their skills and
            knowledge to create products that are both flavorful and visually
            appealing. The company takes great care in preparing itsproducts to
            ensure that they meet the highest
          </p>
          <p className="mb-4 leading-7 text-black font-semibold">
            <span className="text-lg font-bold text-purple-600">
              Sourcing high-quality ingredients : {""}
            </span>
            Food Lover prides itself on sourcing only the best ingredients for
            its products. The company works closely with farmers and other
            suppliers to ensure that its products are fresh, nutritious, and
            free from harmful additives.
          </p>
          <p className=" mb-4 leading-7 text-black font-semibold">
            <span className="text-lg font-bold text-purple-600">
              Commitment to sustainability :{" "}
            </span>{" "}
            Food Lover is committed to reducing its environmental impact and
            promoting sustainability in all aspects of its business. The company
            takes steps to reduce waste, minimize its carbon footprint, and work
            with suppliers who share its commitment to ethical and sustainable
            practices.
          </p>
          <p className="leading-7 text-black font-semibold">
            <span className="text-lg font-bold text-purple-600">
              Exceptional customer service :{" "}
            </span>
            Food Lover places a strong emphasis on customer service, with
            employees who are knowledgeable, friendly, and passionate about
            food. The company strives to create a welcoming and inclusive
            atmosphere for all customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
