import React from "react";
import images1 from "../../../../public/image/gallery1.png";
import images2 from "../../../../public/image/gallery2.png";
import images3 from "../../../../public/image/gallery3.png";
import images4 from "../../../../public/image/gallery4.png";
import images5 from "../../../../public/image/gallery5.png";
import images6 from "../../../../public/image/gallery6.png";
const OutClint = () => {
  return (
    <div className="">
      <h1 className=" text-center text-5xl mb-10 font-bold">
        Out Best Chef Recipes
      </h1>
      <div className=" my-container  grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images1}
          alt=""
        />
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images2}
          alt=""
        />
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images3}
          alt=""
        />
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images4}
          alt=""
        />
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images5}
          alt=""
        />
        <img
          className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 skew-y-3 md:transform-none hover:delay-200"
          src={images6}
          alt=""
        />
      </div>
    </div>
  );
};

export default OutClint;
