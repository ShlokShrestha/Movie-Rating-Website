import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [movie]);

  return (
    <>
      {isLoading ?(
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <div className="card-overlay">
              <div className="card-title">{movie.original_title}</div>
              <div className="run-time">
                {movie.release_date}
                <span className="rating">
                  {movie.vote_average}
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="overview">{movie.overview.slice(0, 108)}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;