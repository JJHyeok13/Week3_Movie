import React, { useState } from 'react';
import './App.css';
import { movies } from "./movies";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseLeave = () => {
    setSelectedMovie(null);
  }

  return (
    <div style={{ backgroundColor: 'rgb(24, 30, 109)' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Movies</h1>
      <div className='movie-container'>
        {movies.results.map((movie, index) => (
          <div
            key={index}
            className='movie-box'
            onMouseLeave={handleMouseLeave}
          >
            <div className="movie-overview">
              <p>{movie.overview}</p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
            <p className='movie-title'>{movie.title}</p>
            <p className='movie-grade'>{movie.vote_average}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;