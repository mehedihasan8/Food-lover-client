import React from "react";
import Ingredients from "../Ingredients/Ingredients";

const Recipes = ({ rec }) => {
  const { ingredients, name, method, rating, favorite } = rec;
  return (
    <div className="card w-96 bg-purple-300  text-neutral-content">
      <div className="card-body ">
        <h2 className="card-title">Recipes : {name}</h2>
        <p>We are using cookies for no reason.</p>
        <p>
          {ingredients.map((ingredient) => (
            <Ingredients ingredient={ingredient}></Ingredients>
          ))}
        </p>
        <p>Method {method}</p>
        <p>Rating {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-outline">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
