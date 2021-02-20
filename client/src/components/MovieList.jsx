import React from 'react';
import Movie from './Movie.jsx'


const MovieList = (props) => (
  <div>
    {props.allMovies.map((movie, index) => <Movie movie={movie} key={index} watched = {props.watched} toggleWatchedMovies={props.toggleWatchedMovies} deleteMovie={props.deleteMovie} onPersonalRatingAdded={props.onPersonalRatingAdded} onPersonalRatingClick={props.onPersonalRatingClick} personalRating={props.personalRating}/>)}
  </div>
  
);




export default MovieList;