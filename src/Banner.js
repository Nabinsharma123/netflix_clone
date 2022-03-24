import React, { useState, useEffect } from "react";
import Axios from "./axios";
import "./banner.css";

function Banner(props) {
  const [movie, setmovie] = useState([]);
  const [isover, setisover] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const request = await Axios.get(props.fetchUrl);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    // console.log(movie);
    fetchdata();
  }, [props.fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function handelchange() {
    setisover(!isover);
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1
          onMouseOver={handelchange}
          onMouseLeave={handelchange}
          className="banner_discreption"
        >
          {isover ? movie?.overview : truncate(movie.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadebottom" />
    </header>
  );
}

export default Banner;
