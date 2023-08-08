import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    
  });

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie">
      <div className="movie-intro">
        <img
          className="movie-backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`} alt="abc"
        />
      </div>
      <div className="movie-detail">
        <div className="movie-detailLeft">
          <div className="movie-posterBox">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`} alt="abc"
            />
          </div>
        </div>
        <div className="movie-detailRight">
          <div className="movie-detailRightTop">
            <div className="movie-name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie-tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
            <div className="movie-rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}
              <i class="fas fa-star" />
              <span className="movie-voteCount">
                {currentMovieDetail ? currentMovieDetail.vote_count + " votes" : " "}
              </span>
            </div>
            <div className="movie-runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : " "}
            </div>
            <div className="movie-releaseDate">
              {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : " "}
            </div>
            <div className="movie-genres">
              {currentMovieDetail ? currentMovieDetail.genres.map((genre) => (
                <span className="movie-genre" id={genre.id}>
                  {genre.name}
                </span>
              )): ""}
            </div>
          </div>
          <div className="movie-detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div className="text">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
