import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovies from './AddMovies.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allMovies: [],
      searchText: '',
      movieText: '',
      isSelectingWatchedMovies: false,
      personalRating: 0
    };

    this.getMovies = this.getMovies.bind(this)
    this.getMoviesForMovielist = this.getMoviesForMovielist.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.clickWatched = this.clickWatched.bind(this)
    this.clickToWatch = this.clickToWatch.bind(this)
    this.onAddMovieTitleChanged = this.onAddMovieTitleChanged.bind(this)
    this.addMovie = this.addMovie.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleWatchedMovies = this.toggleWatchedMovies.bind(this)
    this.onPersonalRatingAdded = this.onPersonalRatingAdded.bind(this)
    this.onPersonalRatingClick = this.onPersonalRatingClick.bind(this)
    
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('/api/movielist')
      .then(({ data }) => {
        this.setState({ 
          allMovies: data
        })
      }
    )}


  handleChange(input) {
    this.setState ({
      searchText: input
    });
  }

  handleClick(event) {
    if (this.state.searchText === '') {
      this.getMovies()
    }
    let searchMovies = [];
    for (let i = 0; i < this.state.allMovies.length; i++) {
      let currentMovie = this.state.allMovies[i]
      if (currentMovie.title.includes(this.state.searchText)) {
        searchMovies.push(currentMovie)
      }
    }
    this.setState({
      allMovies: searchMovies
    })
  }
  
  onAddMovieTitleChanged(input) {
    this.setState({
      movieText: input
    })
  }

  addMovie() {
    let movie = {
      title: this.state.movieText,
      watched: false
    }
    axios.post('/api/movielist', movie)
      .then(() => this.getMovies());
  }

  clickWatched() {
    this.setState ({
      isSelectingWatchedMovies: true
    })
  }

  clickToWatch() {
    this.setState ({
      isSelectingWatchedMovies: false
    })
  }

  getMoviesForMovielist() {
    let movies = [];
    if (this.state.isSelectingWatchedMovies === false) {
      for (let i = 0; i < this.state.allMovies.length; i++) {
        if (this.state.allMovies[i].watched === 0) {
          movies.push(this.state.allMovies[i])
        }
      }
    } else {
      for (let j = 0; j < this.state.allMovies.length; j++) {
        if (this.state.allMovies[j].watched === 1) {
          movies.push(this.state.allMovies[j])
        }
      }
    }
    return movies;
  }


  toggleWatchedMovies(movie) {
    if (movie.watched === 0) {
      movie.watched = 1;
    }

    axios.put('/api/movielist', movie)
      .then(() => this.getMovies());
  }

  deleteMovie(movie) {
    axios.delete('/api/movielist', {data: movie})
      .then(() => this.getMovies());
  }

  onPersonalRatingAdded(input) {
    this.setState({
      personalRating: input
    })
  }

  onPersonalRatingClick() {
    axios.put('/api/personalRating', this.state.personalRating)
      .then(() => this.getMovies)
  }


  render() {
    return (
  <div>
    <h3>Movie List</h3>
    <AddMovies onAddMovieTitleChanged={this.onAddMovieTitleChanged} addMovie={this.addMovie}/>
    <Search handleChange={this.handleChange} handleClick={this.handleClick}/>
    <button onClick={this.clickWatched}>Watched</button>
    <button onClick={this.clickToWatch}>To Watch</button>
    <MovieList personalRating={this.state.personalRating} onPersonalRatingAdded={this.onPersonalRatingAdded} onPersonalRatingClick={this.onPersonalRatingClick} deleteMovie={this.deleteMovie} allMovies={this.getMoviesForMovielist()} toggleWatchedMovies={this.toggleWatchedMovies}/>
  </div>
  );
  }
  
};


export default App;