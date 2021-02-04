import React from 'react';
import Movie from './Movie.jsx'


const MovieList = (props) => (
  <div>
    {props.movies.map((movie, index) => <Movie movie={movie} key={index} />)}
  </div>
  
);




export default MovieList;