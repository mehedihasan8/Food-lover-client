import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const ShowChefDetails = () => {
  const detailsChef = useLoaderData();
  const { id, name, experience, photo, numRecipes, likes, bio, recipes } =
    detailsChef;
  console.log(detailsChef);
  return (
    <div className="my-container">
      <div className="card w-full lg:w-full bg-base-100 border border-purple-400 shadow-xl ">
        <figure className="px-10 pt-10 border border-blue-300 shadow-sm">
          <img className="h-72 w-auto" src={photo} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">Chefe Name : {name}</h2>
          <p className="font-semibold">{bio} Years of experience</p>
          <p className="font-semibold">{experience} Years of experience</p>
          <p className="font-semibold">{numRecipes} of recepies</p>
          <p className="font-semibold">{likes} of like</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Favorite</button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12">
        {recipes.map((rec) => (
          <Recipes rec={rec}></Recipes>
        ))}
      </div>
    </div>
  );
};

export default ShowChefDetails;
