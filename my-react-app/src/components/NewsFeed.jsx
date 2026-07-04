import React, { useEffect, useState } from 'react';
import API from '../services/api';

const NewsFeed = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    API.get('/features/today-news')
      .then(res => setNews(res.data))
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  if (!news) return <p>Loading daily updates...</p>;

  return (
    <div className="news-card">
      <h3>{news.heading}</h3>
      <p>{news.body}</p>
      <small>Source: {news.source} | {news.date}</small>
    </div>
  );
};

export default NewsFeed;