import React from 'react';

function renderMatched(watched) {
    if (watched) {
        return 'Watched'
    } else {
        return 'Not watched'
    }
}

const Movie = (props) => (
    <div>
        <span>
            {props.movie.title}
            <button onClick = {(event)=> props.toggleWatchedMovies(props.movie.title)}>{renderMatched(props.watched)}</button>
        </span>
    </div>
);


export default Movie;