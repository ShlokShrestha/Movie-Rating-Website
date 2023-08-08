import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import MovieList from "./components/movielist/MovieList";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/movies/:type" element={<MovieList />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
