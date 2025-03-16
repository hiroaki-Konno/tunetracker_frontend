import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ handleSearch }) => {
  const [searchParams] = useSearchParams(); // クエリパラメータを取得  const [title, setTitle] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    setTitle(searchParams.get('title') || '');
    setArtist(searchParams.get('artist') || '');
    setGenre(searchParams.get('genre') || '');
  }, []);

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
