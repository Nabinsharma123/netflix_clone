import React, { useEffect, useState } from "react";
import Axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";


function Rows(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w200";
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
   const arrow=document.querySelectorAll(".row_posters");
   function scoll_r(){   
    arrow[props.num].scrollBy(350,0);
  }
  function scoll_l(){
    arrow[props.num].scrollBy(-350,0);
  }


  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="poster_container" >
      <div className="cover" >
            <button className="arrow_key_L" onClick={scoll_l} > <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#eb1000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"/><polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"/></g></g></svg> </button>
      <div className="row_posters">
         {movies.map((movie) => {
          function clicked(){
            handelclick(movie);
             }
          return (

            <div className="full_poster" > 
             <img
              key={movie.id}
              onClick={clicked}
              className={`row_poster ${props.isLargeRow && "row_poster_larger"}`}
              src={ baseUrl + (props.isLargeRow ? movie?.poster_path : movie?.backdrop_path)
              }
              alt={movie?.title || movie?.name || movie?.original_name}
              title={movie?.title || movie?.name || movie?.original_name}
            />
            <h1  className= "movie_name" >{movie?.title || movie?.name || movie?.original_name}</h1>
            
            
            </div>
          
          

          );
        })}

      </div>
            <button className="arrow_key_R" onClick={scoll_r} ><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#eb1000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/><polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/></g></g></svg></button>
            </div>
            </div>
        { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Rows;
