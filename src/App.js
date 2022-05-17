import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
