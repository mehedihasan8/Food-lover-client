import React from "react";
import Ingredients from "../Ingredients/Ingredients";

const Recipes = ({ rec }) => {
  const { ingredients, name, method, rating, favorite } = rec;
  return (
    <div className="card w-96 bg-blue-100 text-black">
      <div className="card-body  ">
        <h2 className="card-title text-2xl font-bold">Recipes : {name}</h2>
        <p className="my-2">
          <small className="text-xl font-semibold">Ingredinent</small>
          {ingredients.map((ingredient) => (
            <Ingredients ingredient={ingredient}></Ingredients>
          ))}
        </p>
        <p>
          <span className="font-semibold">Cooking Method : </span> {method}
        </p>
        <p>Rating {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-outline">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
