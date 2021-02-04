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
      movies: [],
      searchText: '',
      movieText: ''
    };
  }

  handleChange(input) {
    this.setState ({
      searchText: input
    });
  }

  handleClick(event) {
    let searchMovies = [];
    for (let i = 0; i < movies.length; i++) {
      let currentMovie = movies[i]
      if (currentMovie.title.includes(this.state.searchText)) {
        searchMovies.push(currentMovie)
      }
    }
    this.setState({
      movies: searchMovies
    })
  }
  
  grabMovie(input) {
    this.setState({
      movieText: input
    })
  }

  addMovie(event) {
    let movieArray = {
      title: ''
    }
    movieArray.title = this.state.movieText
    this.state.movies.push(movieArray)
    this.setState({
      movies: this.state.movies
    })
  }





  render() {
    return (
  <div>
    <h3>Movie List</h3>
    <AddMovies movies={this.state.movies} grabMovie={this.grabMovie.bind(this)} addMovie={this.addMovie.bind(this)}/>
    <Search handleChange={this.handleChange.bind(this)} handleClick={this.handleClick.bind(this)}/>
    <MovieList movies={this.state.movies}/>
  </div>
  );
  }
  
};


export default App;