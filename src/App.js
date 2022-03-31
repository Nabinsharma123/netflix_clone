import React from "react";
import "./App.css";
import Rows from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Login from "./login";
import Register from "./register";
import { Routes, Route } from "react-router-dom";
function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<div>
          <Nav type="register" />

          <Register />

        </div>
        } />


        <Route path="/login" element={
          <div>
            <Nav type="login" />

            <Login />
          </div>
        } />


        <Route path="/Home" element={<div>
          <Nav />
          <Banner fetchUrl={requests.fetchNetflixOriginals} />
          <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} key={0} isLargeRow={true} type="tv" num={0} />
          <Rows title="Trending Now" fetchUrl={requests.fetchTrending} type="movie" key={1} num={1} />
          <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} type="movie" key={2} num={2} />
          <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} type="movie" key={3} num={3} />
          <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} type="movie" key={4} num={4} />
          <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} type="movie" key={5} num={5} />
          <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} type="movie" key={6} num={6} />
          <Rows title="Documentaries" fetchUrl={requests.fetchDocumantaries} type="movie" key={7} num={7} />
          <Rows title="History" fetchUrl={requests.fetchHistory} type="movie" key={8} num={8} />
        </div>} />
      </Routes>



    </div>
  );
}

export default App;
