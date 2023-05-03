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
      <h1 className=" text-center text-5xl mb-10 mt-10   font-bold">
        Out Best Chef Recipes
      </h1>
      <div className=" my-container  grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="tooltip tooltip-top" data-tip="Beef Wellington">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images1}
            alt=""
          />
        </div>
        <div className="tooltip tooltip-top" data-tip="Scrambled Eggs">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images2}
            alt=""
          />
        </div>
        <div className="tooltip tooltip-top" data-tip="Lobster Risotto">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images3}
            alt=""
          />
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Macaroni and Cheese">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images4}
            alt=""
          />
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Spaghetti Carbonara">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images5}
            alt=""
          />
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Beef Wellington">
          <img
            className="rounded-xl hover:rounded-3xl hover:scale-75 hover:transition-transform hover:translate-x-4 hover:skew-3 md:transform-none hover:delay-200"
            src={images6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OutClint;
