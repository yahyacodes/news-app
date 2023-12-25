import React from "react";
import AllTimeNews from "./AllTimeNews";

const AllTimeList = ({ data }) => {
  return (
    <div>
      {data.map((news, index) => (
        <AllTimeNews key={index} news={news} />
      ))}
    </div>
  );
};

export default AllTimeList;
