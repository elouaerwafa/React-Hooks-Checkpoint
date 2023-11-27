import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { title: 'twilight', description: 'Description 1', posterURL: 'https://i.ebayimg.com/images/g/8QUAAOSwacJjIKsy/s-l1600.jpg', rating: 1 },
    { title: 'scream', description: 'Description 2', posterURL: 'https://m.media-amazon.com/images/I/5127F505WAL._AC_UF1000,1000_QL80_.jpg', rating: 2 },
    // ajouter des movies comme vous oulez 
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const handleFilterTitle = (title) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleFilterRating = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= Number(rating));
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setFilteredMovies((prevFilteredMovies) => [...prevFilteredMovies, newMovie]);
  };

  return (
    <div className="App">
      <Filter handleFilterTitle={handleFilterTitle} handleFilterRating={handleFilterRating} />
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} handleAddMovie={() => {}} />

    </div>
  );
};

export default App;
