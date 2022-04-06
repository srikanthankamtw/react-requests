import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const MOVIES_URL = "https://swapi.dev/api/films";

  const [movies, setMovies] = useState([]);

  function getMoviesHandler() {

    fetch(MOVIES_URL)
    .then( response => {
      return response.json();
    })
    .then( data => {
      setMovies(data.results);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies}/>
      </section>
    </React.Fragment>
  );
}

export default App;
