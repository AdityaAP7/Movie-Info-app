import React from "react";
import MainSlider from "./mainSlider/MainSlider";
import PopularMovies from "./popularMovies/PopularMovies";
import Download from "./download/Download";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="bg-black">
      <MainSlider />
      <PopularMovies />
      <TopRated />
    </div>
  );
};

export default Home;
