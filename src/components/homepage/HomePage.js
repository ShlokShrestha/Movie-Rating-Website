import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./homepage.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MovieList from "../movielist/MovieList";

const Home = () => {
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=761301ff4cb59516b68db05ad4b2a69d"
    )
      .then((res) => res.json())
      .then((data) => (setMovieData(data.results)));
  }, []);
  return (
    <div className="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {movieData?.map((data) => (
          <SwiperSlide key={data.id}>
            <Link
              to={`/movie/${data.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="posterimage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                  alt="ab"
                />
              </div>
              <div className="poster-overlay">
                <div className="title">{data.original_title}</div>
                <div className="poster-runtime">
                  <p className="rel">{data.release_date}</p>
                  <span className="rating">
                    {data.vote_average}
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="overview">
                  <p>{data.overview}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <MovieList />
    </div>
  );
};

export default Home;
