import React from 'react';

const AddMovies = (props) => {
    let onSubmitFunc = function(event) {
        event.preventDefault()
        props.addMovie()
    }
    return (
        <div className="add-movie">
            <form onSubmit={onSubmitFunc}>
                <input type="text" onChange={(event)=> props.onAddMovieTitleChanged(event.target.value)} />
                <button className="btn">Add Movie</button>
            </form>
        </div>
  
    )};


export default AddMovies;