import React from 'react';
import Movie from './Movie.jsx'


const MovieList = (props) => (
  <div>
    {props.allMovies.map((movie, index) => <Movie movie={movie} key={index} watched = {props.watched} toggleWatchedMovies={props.toggleWatchedMovies} deleteMovie={props.deleteMovie} onPersonalRatingClick={props.onPersonalRatingClick} />)}
  </div>
  
);




export default MovieList;