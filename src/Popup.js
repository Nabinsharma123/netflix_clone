import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Youtube from "react-youtube";
import Axios from "./axios";
import "./popup.css"

function Popup(props) {
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const [trailerUrl, setTrailerUrl] = useState("");
    const [error, seterror] = useState(false)




    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        }

    }



    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])
    function playtrailer() {
        Axios.get("/" + (props.movie?.media_type || props.type) + "/" + props.movie.id + "/videos?api_key=87b2aeb41fbcac7a5bab9c09881c6834")
            .then((res) => {

                setTrailerUrl((res.data.results.filter(data => data.type === "Trailer"))[0].key);
            }).catch((err) => {
                if (err) {
                    seterror(true)
                }
            });
    }
    function clicked() {
        document.body.style.overflow = 'scroll';

        setTrailerUrl("");
        props.unpop();



    }
    return (
        <div  >
            <div className="popup" >

                <motion.div className="popup-inner" key={0} initial={{ y: "100vh" }} animate={{ y: 0 }}  >
                    <div className="popup_image_container" >
                        {error &&
                            <div className="no_video_found" >  <h1  >This Video is Unavailable Please Try Another One</h1></div>
                        }
                        {trailerUrl ?


                            <Youtube className="popup_youtube" onEnd={() => { setTrailerUrl(""); }} videoId={trailerUrl} opts={opts} />



                            :

                            <div>
                                <img className="popup_image" src={baseUrl + props.movie?.backdrop_path} alt={props.movie?.title || props.movie?.name || props.movie?.original_name} />

                                <div className="banner_buttons">
                                    <button onClick={playtrailer} className="banner_button">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        <span >Play</span></button>
                                    <button className="banner_button">My List</button>
                                </div>
                                <div className="popup_fadebottom" />
                            </div>
                        }
                    </div>
                    <div className="popup_info_container" >
                        {trailerUrl && <div className="popup_close_butoon_container" >
                            <button onClick={() => { setTrailerUrl(""); }} className="banner_button" >Close The Trailer</button>
                        </div>}

                        <h1>{props.movie?.title || props.movie?.name || props.movie?.original_name}</h1>
                        <p className="popup_discreption" >{props.movie?.overview}</p>
                        <hr  ></hr>
                        <span style={{ "marginBottom": "20px" }} >Info On </span>
                        <h1 style={{ "display": "inline-block" }} > {props.movie?.title || props.movie?.name || props.movie?.original_name}</h1>

                        <div className="movie_info_container" >
                            <span>Release Date : </span>
                            <span  >{props.movie?.release_date || props.movie?.first_air_date}</span>
                        </div>


                        <div className="movie_info_container" >
                            <span>Average Vote: </span>
                            <span  >{props.movie?.vote_average}</span>
                        </div>
                        <div className="movie_info_container" >
                            <span>Original Language: </span>
                            <span  >{props.movie?.original_language}</span>
                        </div>
                        <div className="movie_info_container" >
                            <span>Adult: </span>
                            <span  >{props.movie?.adult ? "Yes" : "No"}</span>
                        </div>
                    </div>




                    <button className="popup_close" onClick={clicked} ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg></button>

                </motion.div>

            </div>
        </div>
    );
}

export default Popup;