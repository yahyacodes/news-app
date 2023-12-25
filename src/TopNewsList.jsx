import React from "react";
import TopNews from "./TopNews";

const TopNewsList = ({ data }) => {
  return (
    <div>
      {data.map((news, index) => (
        <TopNews key={index} news={news} />
      ))}
    </div>
  );
};

export default TopNewsList;
