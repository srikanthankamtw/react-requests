import React, { useState } from 'react';
import axios from "axios";

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const MOVIES_URL = "https://swapi.dev/api/films";

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  async function getMoviesHandler() {

    setIsLoading(true);
    setError(null);

    axios.get(MOVIES_URL)
    .then(response => { return response.data })
    .then(data => { setMovies(data.results)})
    .catch(error => { 
      if (error.response.status < 500){
        setError("Something went wrong!");
      }
    })
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
        { !isLoading && movies.length === 0 && !error && <p> No movies fetched!</p> }
        { !isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
