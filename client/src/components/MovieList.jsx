import React from 'react';
import Movie from './Movie.jsx'


const MovieList = (props) => (
  <div>
    {props.movies.map((movie, index) => <Movie movie={movie} key={index} watched = {props.watched} toggleWatchedMovies={props.toggleWatchedMovies}/>)}
  </div>
  
);




export default MovieList;