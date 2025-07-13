import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "Nepali", release_date: "2020" },
    { id: 2, title: "indian", release_date: "2040" },
    { id: 3, title: "usa", release_date: "2025" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();

    alert(searchQuery);
  };

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="home">
        <form action="" onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
