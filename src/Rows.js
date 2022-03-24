import React, { useEffect, useState } from "react";
import Axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer"

function Rows(props) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setmovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await Axios.get(props.fetchUrl);
      setmovies(request.data.results);
    }
    fetchdata();
  }, [props.fetchUrl]);


  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

   function handelclick(movie){
 console.log(movie);
     if(trailerUrl){
       setTrailerUrl("");
     }
    else
    {   Axios.get("/"+props.type+"/"+movie.id+"/videos?api_key=87b2aeb41fbcac7a5bab9c09881c6834")
      .then((res)=>{
console.log(res);
        setTrailerUrl((res.data.results.filter(data=>data.type==="Trailer"))[0].key);
      });
    }
   
   }

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {

          function clicked(){
            handelclick(movie);
   }
          return (
            <img
              key={movie.id}
              onClick={clicked}
              className={`row_poster ${
                props.isLargeRow && "row_poster_larger"
              }`}
              src={
                baseUrl +
                (props.isLargeRow ? movie?.poster_path : movie?.backdrop_path)
              }
              alt={movie?.title || movie?.name || movie?.original_name}
              title={movie?.title || movie?.name || movie?.original_name}
            />
          );
        })}
      </div>
        { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Rows;
