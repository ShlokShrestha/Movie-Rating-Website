import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);
  
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "now_playing"
      }?api_key=761301ff4cb59516b68db05ad4b2a69d`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterMovieList = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movielist">
      <div className="header-part">
        <h2 className="list_type">{(type ? type : "In theatre").toUpperCase()}</h2>
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className="list-card">
        {filterMovieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
