import React from "react";
import TechNews from "./TechNews";

const TechNewsList = ({ data }) => {
  return (
    <div>
      {data.map((news, index) => (
        <TechNews key={index} news={news} />
      ))}
    </div>
  );
};

export default TechNewsList;
