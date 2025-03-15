import React, { useState, useCallback } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const onSearch = useCallback(() => {
    console.log(
      'onSearch called with query:',
      'title',
      title,
      'artist:',
      artist,
      'genre:',
      genre,
    );
    handleSearch(title, artist, genre);
  }, [handleSearch, title, artist, genre]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
      <button onClick={onSearch}>検索</button>
    </div>
  );
};

export default SearchBar;
