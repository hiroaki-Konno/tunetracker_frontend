import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';
import { useSearchParams } from 'react-router-dom';

const fetchSearchResults = async (page, title, artist, genre) => {
  console.log(
    'fetchSearchResults called with query:',
    title,
    artist,
    genre,
    'page:',
    page,
  );
  try {
    const params = new URLSearchParams({ title, artist, genre });
    const response = await axios.get(
      `http://localhost:8000/api/data/?${params.toString()}`,
    );
    // setData(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
  // return [
  //   {
  //     id: 1,
  //     title: 'Sample Sheet 1',
  //     composer: 'Composer A',
  //     instrument: 'Piano',
  //   },
  //   // 他のデータ...
  // ];
};

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    () => Number(searchParams.get('page')) || 1,
  );
  const [query, setQuery] = useState(() => searchParams.get('query') || '');

  console.log('SearchResultsPage rendered with state:', {
    searchResults,
    loading,
    currentPage,
    query,
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log('useEffect fetchData called');
      setLoading(true);
      try {
        const title = searchParams.get('title') || '';
        const artist = searchParams.get('artist') || '';
        const genre = searchParams.get('genre') || '';
        const results = await fetchSearchResults(
          query,
          currentPage,
          title,
          artist,
          genre,
        );
        console.log('useEffect fetchData results:', results);
        setSearchResults(results);
      } catch (error) {
        console.error('fetchData error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [currentPage, query, searchParams]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams((prevParams) => {
      return { ...Object.fromEntries(prevParams), page: newPage };
    });
  };

  const handleSearch = useCallback(
    async (title, artist, genre) => {
      console.log('Updating URL with:', { title, artist, genre });
      setLoading(true);
      setCurrentPage(1); // 新しい検索クエリの場合、最初のページにリセット

      // 空の値を除外してクエリパラメータを設定
      const params = {
        page: 1,
        title: title || undefined,
        artist: artist || undefined,
        genre: genre || undefined,
      };

      // 空の値を持つプロパティを削除
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== undefined),
      );

      setSearchParams(filteredParams); // クエリパラメータを更新

      try {
        const results = await fetchSearchResults(1, title, artist, genre);
        console.log('handleSearch results:', results);
        setSearchResults(results);
      } catch (error) {
        console.error('検索に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    },
    [setSearchParams],
  );

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <SearchResultList searchResults={searchResults} />
      )}
      <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} />
    </div>
  );
};

export default SearchResultsPage;
