import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowChefDetails = () => {
  const detailsChef = useLoaderData();
  const { id, name, experience, photo, likes, bio } = detailsChef;
  console.log(detailsChef);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{bio}</p>
        <p>{experience}</p>
      </div>
    </div>
  );
};

export default ShowChefDetails;
