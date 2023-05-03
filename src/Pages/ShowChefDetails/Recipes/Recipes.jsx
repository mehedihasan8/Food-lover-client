import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = ({ rec }) => {
  const [isFavorit, setIsFavorit] = useState(false);

  const handelBtnDisable = () => {
    setIsFavorit(true);
    toast.success(" Recipe is your Favorite !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { ingredients, name, method, rating, favorite } = rec;
  return (
    <div className="card bg-blue-100 text-black">
      <div className="card-body  ">
        <h2 className="card-title text-2xl font-bold">Recipes : {name}</h2>
        <p className="my-2">
          <small className="text-xl font-semibold">Ingredinent : </small>
          {ingredients.map((ingredient) => (
            <Ingredients ingredient={ingredient}></Ingredients>
          ))}
        </p>
        <p>
          <span className="font-semibold">Cooking Method : </span> {method}
        </p>
        <p>Rating {rating}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handelBtnDisable}
            disabled={isFavorit}
            className="btn btn-primary btn-outline"
          >
            Favorite
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
