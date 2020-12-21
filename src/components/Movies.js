import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
          <div>
              <p>Movie Title: {movie.title}</p>
              <p>Movie Time: {movie.time}</p>
              Movie Genres:
            <ul>
              {movie.genres.map(gen => <li>{gen}</li>)}
            </ul>
          </div>)
        }
    </div>
  );
};

export default Movies;
