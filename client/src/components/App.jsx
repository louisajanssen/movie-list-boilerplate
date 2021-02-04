import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovies from './AddMovies.jsx'

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toWatch: [],
      watchedMovies: [],
      searchText: '',
      movieText: '',
      watched: false
    };
    this.getMoviesArray = this.getMoviesArray.bind(this)
  }


  handleChange(input) {
    this.setState ({
      searchText: input
    });
  }

  handleClick(event) {
    let searchMovies = [];
    for (let i = 0; i < this.state.toWatch.length; i++) {
      let currentMovie = this.state.toWatch[i]
      if (currentMovie.title.includes(this.state.searchText)) {
        searchMovies.push(currentMovie)
      }
    }
    this.setState({
      toWatch: searchMovies
    })
  }
  
  grabMovie(input) {
    this.setState({
      movieText: input
    })
  }

  addMovie(event) {
    let movieObj = {
      title: this.state.movieText
    }
    let movieArray = []
    for (let i = 0; i < this.state.toWatch.length; i++) {
      movieArray.push(this.state.toWatch[i])
    }
    movieArray.push(movieObj)
    this.setState({
      toWatch: movieArray
    })
  }

  clickWatched() {
    this.setState ({
      watched: true
    })
  }

  clickToWatch() {
    this.setState ({
      watched: false
    })
  }

  getMoviesArray() {
    if (this.state.watched) {
      return this.state.watchedMovies;
    } else {
      return this.state.toWatch;
    }
  }

  toggleWatchedMovies(title) {
    let newToWatch = []
    let newWatchedMovies = []
    for (let i = 0; i < this.state.toWatch.length; i++) {
      if (this.state.toWatch[i].title === title) {
        newWatchedMovies.push(this.state.toWatch[i])
      } else {
        newToWatch.push(this.state.toWatch[i])
      }
    }
    for (let i = 0; i < this.state.watchedMovies.length; i++) {
      newWatchedMovies.push(this.state.watchedMovies[i])
    }
    this.setState ({
      toWatch: newToWatch,
      watchedMovies: newWatchedMovies
    })
  }


  render() {
    return (
  <div>
    <h3>Movie List</h3>
    <AddMovies movies={this.state.toWatch} grabMovie={this.grabMovie.bind(this)} addMovie={this.addMovie.bind(this)}/>
    <Search handleChange={this.handleChange.bind(this)} handleClick={this.handleClick.bind(this)}/>
    <button onClick={this.clickWatched.bind(this)}>Watched</button>
    <button onClick={this.clickToWatch.bind(this)}>To Watch</button>
    <MovieList movies={this.getMoviesArray()} watched={this.state.watched} toggleWatchedMovies={this.toggleWatchedMovies.bind(this)}/>
  </div>
  );
  }
  
};


export default App;