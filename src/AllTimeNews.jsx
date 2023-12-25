import React from "react";

const AllTimeNews = ({ news }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      <div className="w-full sm:w-1/1 md:w-1/1 lg:w-3/12 xl:w-3/12">
        <img src={news.urlToImage} alt="" />
      </div>

      <div className="w-full sm:w-1/1 md:w-1/1 lg:w-8/12 xl:w-8/12 text-gray-100">
        <h1 className="text-xl font-bold max-w-lg">{news.title}</h1>
        <p className="text-md font-mono text-red-500">{news.author}</p>
        <p className="text-lg max-w-lg text-gray-300">{news.description}</p>
        <p className="mt-2 font-md text-gray-400 max-w-2xl">{news.content}</p>
      </div>
    </div>
  );
};

export default AllTimeNews;
