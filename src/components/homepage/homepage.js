import React from "react"
import "./homepage.css"


import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


import Header from "./component/header/Header";
import Home from './pages/home/home';
import MovieList from "./component/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
function Homepage() {
  return (
    <div className="home">
       <Router>
         <Header/>
          <Switch>
          <Route index element={<Home/>}></Route>
             <Route path="movie/:id" element={<Movie/>}></Route>
             <Route path="movies/:type" element={<MovieList/>}></Route>
             <Route path="/*" element={<h1>Error page</h1>}></Route>
          </Switch>
       </Router>
     
    </div>
  );
}






export default Homepage;