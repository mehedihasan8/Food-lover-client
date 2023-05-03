import React, { useEffect } from "react";
import Chef from "./Chef";

const Chefs = ({ datas }) => {
  return (
    <div className="my-container">
      <h1 className="text-center font-bold text-5xl mb-16 mt-10">
        Out Best Chef{" "}
      </h1>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((data) => (
          <Chef key={data.id} data={data}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
