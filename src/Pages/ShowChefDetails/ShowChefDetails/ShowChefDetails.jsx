import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Recipes from "../Recipes/Recipes";
import Loading from "../../Sherid/Loading/Loading";

const ShowChefDetails = () => {
  const detailsChef = useLoaderData();
  const navigaction = useNavigation();
  if (navigaction.state === "loading") {
    return <Loading></Loading>;
  }
  const { id, name, experience, photo, numRecipes, likes, bio, recipes } =
    detailsChef;
  console.log(detailsChef);
  return (
    <div className="">
      <div className="card  lg:w-3/5 lg:mx-auto mx-3 mt-12 bg-base-100 border border-purple-400 shadow-xl ">
        <figure className="px-10 pt-10 bg-purple-300 m-5   ">
          <LazyLoadImage
            effect="blur"
            alt="img"
            height={380}
            width={380}
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-center text-3xl">
            Chefe Name : {name}
          </h2>
          <p className="font-semibold  my-3">
            <span className="font-bold text-lg">About : </span> {bio}
          </p>
          <p className="font-semibold">
            <span className="font-bold text-lg"> Experience : </span>
            {experience} Years
          </p>

          <div className="card-actions justify-between mt-8 mb-4">
            <p className="font-semibold bg-purple-500 rounded text-white px-2 ">
              <span className="font-bold text-lg"> Top Most Recepies : </span>
              {numRecipes} items
            </p>
            <p className="font-semibold  bg-purple-500 rounded text-white px-2 ">
              <span className="font-bold text-lg"> Likes : </span>
              {likes} Total
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold mt-12 mb-2 text-5xl  text-purple-600">
          Best And Best Recipes
        </h1>
        <span className="my-container grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {recipes.map((rec) => (
            <Recipes rec={rec}></Recipes>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ShowChefDetails;
