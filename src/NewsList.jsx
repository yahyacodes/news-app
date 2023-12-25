import React from "react";
import News from "./News";

const NewsList = ({ data }) => {
  return (
    <div>
      {data.map((news, index) => (
        <News key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
