import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Recipes = ({ rec }) => {
  const [isFavorit, setIsFavorit] = useState(false);

  const handelBtnDisable = () => {
    setIsFavorit(true);
    toast.success(" Recipe is your Favorite !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { ingredients, name, method, rating, img } = rec;
  console.log(img);
  return (
    <div className="card-body border rounded-xl relative  border-purple-400 ">
      <div className="">
        <LazyLoadImage
          alt="img"
          className=" h-48 w-full rounded-lg shadow-sm"
          height={""}
          width={""}
          src={img}
        />
        <div className="p-3 mb-6">
          <h2 className="card-title text-2xl mt-2 font-bold"> {name}</h2>
          <p className="my-2">
            <small className="text-xl font-semibold">Ingredinent : </small>
            <div className="grid grid-cols-2 my-3">
              {ingredients.map((ingredient) => (
                <Ingredients ingredient={ingredient}></Ingredients>
              ))}
            </div>
          </p>
          <p className="mb-2">
            <span className="font-semibold  ">Cooking Method : </span> {method}
          </p>
        </div>

        <div className=" bottom-4 absolute ">
          <div className="flex items-center justify-between gap-10">
            <p className="flex items-center">
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={
                  <FaStar className="text-yellow-400"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
                readonly
              />
              <span className="mb-1 ml-2 font-semibold leading-5">
                Rating : {rating}
              </span>
            </p>
            <button
              onClick={handelBtnDisable}
              disabled={isFavorit}
              className="btn btn-primary btn-outline"
            >
              Favorite
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
