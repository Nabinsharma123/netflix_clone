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

        backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie?.backdrop_path})`
      }}
    >

      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            <span >Play</span></button>
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
