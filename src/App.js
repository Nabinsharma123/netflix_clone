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
      <Rows title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} type="tv"
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} type="movie" />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} type="movie" />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} type="movie" />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} type="movie" />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  type="movie"/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} type="movie"/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumantaries} type="movie" />
    </div>
  );
}

export default App;
