import React, { useState, useEffect } from "react";
import Axios from "./axios";
import "./banner.css";
import Popup from "./Popup";
import Youtube from "react-youtube";

function Banner(props) {

  const [movie, setmovie] = useState([]);

  const [isclick, setisclick] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, seterror] = useState(false)




  useEffect(() => {
    async function fetchdata() {
      const request = await Axios.get(props.fetchUrl);
      setmovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchdata();
  }, [props.fetchUrl]);





  function playtrailer() {
    Axios.get("/tv/" + movie?.id + "/videos?api_key=87b2aeb41fbcac7a5bab9c09881c6834")
      .then((res) => {

        setTrailerUrl((res.data.results.filter(data => data.type === "Trailer"))[0].key);
      }).catch((err) => {
        if (err) {
          seterror(true);
        }
      });
  }

  const opts = {
    height: "450",
    width: "100%",
    related: false,
    playerVars: {

      autoplay: 1,
    }

  }




  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  return (
    <header
      className="banner"
      style={{

        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
      }}
    >
      {error &&
        <div className="no_video_found" >  <h1  >This Video is Unavailable Please Try Another One  </h1></div>
      }
      {trailerUrl ?
        <div>
          <Youtube className="banner_youtube" onEnd={() => { setTrailerUrl(""); }} videoId={trailerUrl} opts={opts} />
          <div className="banner_tariler_close_button" >
            {trailerUrl && <button className="banner_button" onClick={() => {
              setTrailerUrl("")

            }} > Close The Trailer </button>}

          </div>
        </div>

        :


        <div className="banner_contents">


          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button" onClick={playtrailer} >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
              <span >Play</span></button>
            <button onClick={() => { setisclick(true); }} className="banner_button">More Info</button>
          </div>
          <h1

            className="banner_discreption"
          >
            {truncate(movie.overview, 150)}
          </h1>
          {isclick && <Popup unpop={() => { setisclick(false); }} movie={movie} type={"tv"} />}
        </div>



      }
      {trailerUrl ? null : <div className="banner_fadebottom" />}


    </header>
  );
}

export default Banner;
