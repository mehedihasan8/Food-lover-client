import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ data }) => {
  const { id, name, experience, photo, numRecipes, likes } = data;
  return (
    <div>
      <div className="card w-96 bg-base-100 border border-purple-400 shadow-xl ">
        <figure className="px-10 pt-10 border border-blue-300 shadow-sm">
          <img className="h-44 w-44" src={photo} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Name : {name}</h2>
          <p className="font-semibold">{experience} Years of experience</p>
          <p className="font-semibold">{numRecipes} of recepies</p>
          <p className="font-semibold">{likes} of like</p>
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
