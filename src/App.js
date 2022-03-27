import React from "react";

import "./App.css";
import Rows from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {

  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} type="tv" num={0} />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} type="movie" num={1} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} type="movie" num={2} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} type="movie" num={3} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} type="movie" num={4} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} type="movie" num={5} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} type="movie" num={6} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumantaries} type="movie" num={7} />
      <Rows title="History" fetchUrl={requests.fetchHistory} type="movie" num={8} />
      {/* <div className="popup" >
        <div className="popup-inner" ></div>
      </div> */}
    </div>
  );
}

export default App;
