import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ handleSearch }) => {
  const [searchParams] = useSearchParams(); // クエリパラメータを取得  const [title, setTitle] = useState('');
  const [title, setTitle] = useState('');
  const [composer, setComposer] = useState('');
  const [instrument, setInstrument] = useState('');

  useEffect(() => {
    setTitle(searchParams.get('title') || '');
    setComposer(searchParams.get('composer') || '');
    setInstrument(searchParams.get('instrument') || '');
  }, [searchParams]);

  const onSearch = useCallback(() => {
    console.log(
      'onSearch called with query:',
      'title',
      title,
      'composer:',
      composer,
      'instrument:',
      instrument,
    );
    handleSearch(title, composer, instrument);
  }, [handleSearch, title, composer, instrument]);

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
        value={composer}
        onChange={(e) => setComposer(e.target.value)}
        placeholder="Composer"
      />
      <input
        type="text"
        value={instrument}
        onChange={(e) => setInstrument(e.target.value)}
        placeholder="Instrument"
      />
      <button onClick={onSearch}>検索</button>
    </div>
  );
};

export default SearchBar;
