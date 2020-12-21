import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <div>
          <p>Director Name: {director.name}</p>
          <p>Director's Movies:</p>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
        
      )}
    </div>
  );
}

export default Directors
