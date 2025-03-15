import React from 'react';

const SearchResultItem = ({ result }) => {
  return (
    <div className="search-result-item">
      <h3>{result.title}</h3>
      <p>作曲家: {result.artist}</p>
      <p>ジャンル: {result.genre}</p>
      {/* <p>楽器: {result.genre}</p> */}
      <a href={`/sheet/${result.id}`}>詳細を見る</a>
    </div>
  );
};

export default SearchResultItem;
