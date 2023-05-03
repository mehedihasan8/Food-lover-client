import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ data }) => {
  const { id, name, experience, photo, numRecipes, likes } = data;
  return (
    <div>
      <div className="card w-full bg-base-100 border border-purple-400 shadow-xl ">
        <div className="bg-slate-200 m-3 rounded-xl">
          <figure className="px-10 pt-10   shadow-sm">
            <img className="h-44 w-44" src={photo} alt="img" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold">Name : {name}</h2>
          <p className="font-semibold">Experience : {experience} Years</p>
          <p className="font-semibold">Recepies : {numRecipes} items </p>
          <p className="font-semibold">Ovarall Likes : {likes} </p>
          <Link to={`/showchef/${id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-primary">
                View Recipes
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
