import React, { useEffect } from "react";
import Chef from "./Chef";

const Chefs = ({ datas }) => {
  return (
    <div className="my-container  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {datas.map((data) => (
        <Chef key={data.id} data={data}></Chef>
      ))}
    </div>
  );
};

export default Chefs;
