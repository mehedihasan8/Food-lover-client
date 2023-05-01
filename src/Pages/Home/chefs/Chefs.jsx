import React, { useEffect } from "react";

const Chefs = () => {
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Chefs;
