import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing.js";
import movieApi from "../../common/Api/movieApi";
import { APIKey } from "../../common/Api/movieApiKey";
import { useDispatch } from "react-redux";
import  {addMovies}  from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Mission";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const Response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error: ", err);
        });

      dispatch(addMovies(Response.data));
      // console.log(response.data);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
