import React, { useState } from 'react';
const AddMovie = ({ handleAddMovie }) => {
    const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
    }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0,
    });
    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Title:
        <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
        </label>
        <label>
        Description:
        <input type="text" name="description" value={newMovie.description} onChange={handleChange} />
        </label>
        <label>
        Poster URL:
        <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleChange} />
        </label>
        <label>
        Rating:
        <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} />
        </label>
        <button type="submit">Add Movie</button>
        </form>
    );
};
export default AddMovie;
