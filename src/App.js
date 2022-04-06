import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const MOVIES_URL = "https://swapi.dev/api/films";

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function getMoviesHandler() {

    setIsLoading(true);
    const response = await fetch(MOVIES_URL);
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { isLoading && <p> loading...</p> }
        { !isLoading && movies.length > 0 && <MoviesList movies={movies}/> }
        { !isLoading && movies.length == 0 && <p> No movies fetched!</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
