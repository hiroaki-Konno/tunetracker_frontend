import React from 'react';

const SearchResultItem = ({ result: item }) => {
  return (
    <div className="search-result-item">
      <h3>{item.title}</h3>
      <p>作曲家: {item.artist}</p>
      <p>ジャンル: {item.genre}</p>
      {/* <p>楽器: {result.genre}</p> */}
      <a href={`/score?id=${item.id}`}>詳細を見る</a>
    </div>
  );
};

export default SearchResultItem;
