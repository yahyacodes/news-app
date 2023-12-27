import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import TopNewsList from "./TopNewsList";
import AllTimeList from "./AllTimeList";

function App() {
  const [data, setData] = useState([]);
  const [top, setTop] = useState([]);
  const [allTime, setAllTime] = useState([]);
  // fe19bf63247e4170bbcb8d4ae6e3b4ab

  // Fetching trending news from bbc news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "fe19bf63247e4170bbcb8d4ae6e3b4ab";
        const apiUrl =
          "https://newsapi.org/v2/top-headlines?" +
          "sources=bbc-news&" +
          "apiKey=" +
          apiKey;

        const res = await fetch(apiUrl);
        const data = await res.json();

        setData(data.articles);
      } catch (err) {
        console.error("Error Fetching news:", err);
      }
    };
    fetchNews();
  }, []);

  //Fetching top news from cnn
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "fe19bf63247e4170bbcb8d4ae6e3b4ab";
        const apiUrl =
          "https://newsapi.org/v2/top-headlines?" +
          "sources=cnn&" +
          "apiKey=" +
          apiKey;

        const res = await fetch(apiUrl);
        const data = await res.json();

        setTop(data.articles);
      } catch (err) {
        console.error("Error Fetching news:", err);
      }
    };
    fetchNews();
  }, []);

  // Fetching all time news from us depending on country top news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "fe19bf63247e4170bbcb8d4ae6e3b4ab";
        const apiUrl =
          "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=" +
          apiKey;

        const res = await fetch(apiUrl);
        const data = await res.json();

        setAllTime(data.articles);
      } catch (err) {
        console.error("Error Fetching news:", err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="mb-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList data={data} />} />
        <Route path="/top-news" element={<TopNewsList data={top} />} />
        <Route path="/all-time" element={<AllTimeList data={allTime} />} />
      </Routes>
    </div>
  );
}

export default App;
