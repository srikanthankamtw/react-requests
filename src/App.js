import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const MOVIES_URL = "https://swapi.dev/api/films";

  const [movies, setMovies] = useState([]);

  async function getMoviesHandler() {

    const response = await fetch(MOVIES_URL);
    const data = await response.json();
    setMovies(data.results);
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
