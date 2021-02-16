import React from 'react';


class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isExpanded: false
        }
        this.renderMatched = this.renderMatched.bind(this)
        this.movieTitleClick = this.movieTitleClick.bind(this)
        this.movieInfo = this.movieInfo.bind(this)
        this.onPersonalRatingClick = this.onPersonalRatingClick.bind(this)
    }
    renderMatched(watched) {
        if (watched) {
            return 'Watched'
        } else {
            return 'Watched?'
        }
    }

    movieTitleClick() {
        
        if (this.state.isExpanded === false) {
            this.setState ({
                isExpanded: true
            })
        } else {
            this.setState ({
                isExpanded: false
            })
        }
    }

    onPersonalRatingClick() {
        console.log('clicked!')
    }

    movieInfo() {
        if (this.state.isExpanded === true) {
            return (
                <div>
                    <span>Year: 1996, Rating: 7</span>
                    <input></input><button onClick = {(event) => this.onPersonalRatingClick()}>Add Personal Rating</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <span>
                    <span onClick = {(event) => this.movieTitleClick(this.props.movie)}>{this.props.movie.title}</span>
                    <button onClick = {(event)=> this.props.toggleWatchedMovies(this.props.movie)}>{this.renderMatched(this.props.watched)}</button>
                    <button onClick = {(event)=> this.props.deleteMovie(this.props.movie)}>Remove</button>
                </span>
                <div>{this.movieInfo()}</div>
            </div>
        )
    }
};


export default Movie;