import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {

  const [search, setSearch] = useState("bitcoin");
  const [newsData, setNewsData] = useState(null);

  const getData = async (query) => {
    const backend = import.meta.env.VITE_BACKEND_URL;   // coming from .env
    const response = await fetch(`${backend}/news?q=${query}`);
    const json = await response.json();
    setNewsData(json);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    const cat = event.target.value;
    setSearch(cat);
    getData(cat);
  };

  useEffect(() => {
    getData(search);
  }, []);

  return (
    <div>
      <nav>
        <h1 className="trend_news">Trending News</h1>

        <div className="searchBar">
          <input 
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={() => getData(search)}>Search</button>
        </div>
      </nav>

      <div className="categorybtn">
        <button value="bitcoin" onClick={userInput}>Bitcoin</button>
        <button value="exchanges" onClick={userInput}>Exchanges</button>
        <button value="blockchain" onClick={userInput}>Blockchain</button>
        <button value="trading" onClick={userInput}>Trading</button>
        <button value="politics" onClick={userInput}>Politics</button>
      </div>

      {newsData ? <Card data={newsData} /> : <p>Loading...</p>}
    </div>
  )
}

export default Newsapp;
