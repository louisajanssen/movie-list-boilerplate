import React from 'react';
import config from '../../../config.js'
import axios from 'axios'

class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isExpanded: false,
            popularity: 0,
            release_date: ''
        }
        this.renderMatched = this.renderMatched.bind(this)
        this.movieTitleClick = this.movieTitleClick.bind(this)
        this.movieInfo = this.movieInfo.bind(this)

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
        const searchTerm = encodeURIComponent(this.props.movie.title)
        const url = `https://api.themoviedb.org/3/search/movie/?api_key=${config.TOKEN}&query=${searchTerm}`
        
        axios.get(url)
            .then(({ data }) => {
                this.setState({
                    popularity: data.results[0].popularity,
                    release_date: data.results[0].release_date
                })
            })
        

    }

    movieInfo() {
        if (this.state.isExpanded === true) {
            return (
                <div>
                    <span>Release Date: {this.state.release_date}, Popularity: {this.state.popularity}, Personal Rating: {this.props.personalRating}</span>
                    <input onChange={(event) => this.props.onPersonalRatingAdded(event.target.value)}></input><button onClick={(event) => this.props.onPersonalRatingClick(event)}>Add Personal Rating</button>
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