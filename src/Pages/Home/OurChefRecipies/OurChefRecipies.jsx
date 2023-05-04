import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import images1 from "../../../../public/image/gallery1.png";
import images2 from "../../../../public/image/gallery2.png";
import images3 from "../../../../public/image/gallery3.png";
import images4 from "../../../../public/image/gallery4.png";
import images5 from "../../../../public/image/gallery5.png";
import images6 from "../../../../public/image/gallery6.png";
const OurChefRecipies = () => {
  return (
    <div className="">
      <h1 className=" text-center text-5xl mb-10 mt-10  text-purple-600 font-bold">
        Our Best Chef Recipes
      </h1>
      <div className=" my-container  grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Beef Wellington
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl mx-auto hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images1}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Scrambled Eggs
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images2}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Lobster Risotto
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images3}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Macaroni and Cheese
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images4}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Spaghetti Carbonara
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images5}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-purple-500 text-2xl font-bold mb-5 text-center">
            Hot and cold dring
          </h1>
          <LazyLoadImage
            effect="blur"
            alt="img"
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            height={380}
            width={380}
            src={images6}
          />
        </div>
      </div>
    </div>
  );
};

export default OurChefRecipies;
