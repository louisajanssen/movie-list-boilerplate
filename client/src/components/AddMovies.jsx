import React from 'react';

const AddMovies = (props) => (
    <div className="add-movie">
        <input type="text" onChange={(event)=> props.grabMovie(event.target.value)} />
        <button className="btn" onClick={(event)=> props.addMovie(event)} >Add Movie</button>
    </div>
  
);


export default AddMovies;