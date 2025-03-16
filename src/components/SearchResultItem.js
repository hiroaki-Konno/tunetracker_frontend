import React from 'react';

const SearchResultItem = ({ result: item }) => {
  return (
    <div className="search-result-item">
      <h3>{item.title}</h3>
      <p>作曲家: {item.composer}</p>
      {/* <p>ジャンル: {item.genre}</p> */}
      <p>楽器: {item.instrument}</p>
      <a href={`/score?id=${item.score_id}`}>詳細を見る</a>
    </div>
  );
};

export default SearchResultItem;
