import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResultList = ({ searchResults }) => {
  console.log('SearchResultList rendered with searchResults:', searchResults);

  if (!searchResults) {
    return <p>検索結果が読み込まれませんでした。再度検索してください。</p>;
  }

  if (searchResults.length === 0) {
    return <p>検索結果が見つかりませんでした。</p>;
  }

  return (
    <div className="search-result-list">
      {searchResults.map((result) => (
        <SearchResultItem key={result.id} result={result} />
      ))}
    </div>
  );
};

export default SearchResultList;
