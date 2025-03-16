import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';
import { useSearchParams } from 'react-router-dom';

import { getHistory } from './utils/historyUtils';

const fetchSearchResults = async (page, title, artist, genre) => {
  console.log('fetchSearchResults called with:', {
    page,
    title,
    artist,
    genre,
  }); // Debug print
  try {
    const params = new URLSearchParams({ title, artist, genre, page });
    const response = await axios.get(
      `http://localhost:8000/api/data/?${params.toString()}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    () => Number(searchParams.get('page')) || 1,
  );

  // トップページ（/search）アクセス時のリセット確認
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/search') {
      console.log('Top page detected, resetting search results.');

      // 履歴の取得
      const history = getHistory();
      console.log('Detail history:', history); // Debug print

      // ローカルストレージから検索結果を取得
      const savedResults =
        JSON.parse(localStorage.getItem('searchResults')) || [];

      // 履歴に該当するデータを除外して再保存
      const preservedResults = savedResults.filter((result) =>
        history.includes(String(result.id)),
      );

      // ローカルストレージを更新
      if (preservedResults.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(preservedResults));
      } else {
        localStorage.removeItem('searchResults'); // 全て削除
      }
      setSearchResults([]); // UIも初期化
    }
  }, [window.location.pathname]);

  // 検索条件に基づいてAPIからデータを取得
  useEffect(() => {
    console.log(
      'useEffect triggered: Fetching data with params:',
      searchParams.toString(),
    ); // Debug print

    const fetchData = async () => {
      const title = searchParams.get('title') || '';
      const artist = searchParams.get('artist') || '';
      const genre = searchParams.get('genre') || '';
      const page = searchParams.get('page') || '';

      // 検索条件が全て空の場合はAPIリクエストをスキップ
      if (searchParams.size === 0) {
        console.log('No search conditions provided. Skipping API request.'); // Debug print
        setSearchResults([]); // 結果を空にリセット
        return;
      }

      setLoading(true);
      try {
        console.log(
          'Fetching data for title:',
          title,
          ', artist:',
          artist,
          ', genre:',
          genre,
        ); // Debug print
        const results = await fetchSearchResults(
          currentPage,
          title,
          artist,
          genre,
        );
        setSearchResults(results);
        localStorage.setItem('searchResults', JSON.stringify(results)); // キャッシュ
        console.log('Search results updated:', results); // Debug print
      } catch (error) {
        console.error('API fetch failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, searchParams]);

  // 検索の実行
  const handleSearch = useCallback(
    async (title, artist, genre) => {
      setLoading(true);
      setCurrentPage(1); // 新しい検索では1ページ目にリセット
      const params = { page: 1, title, artist, genre };
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== ''),
      );
      setSearchParams(filteredParams); // URLパラメータを更新
      try {
        console.log('Executing handleSearch with:', filteredParams); // Debug print
        const results = await fetchSearchResults(1, title, artist, genre);
        setSearchResults(results);
        localStorage.setItem('searchResults', JSON.stringify(results)); // キャッシュ
      } catch (error) {
        console.error('検索に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    },
    [setSearchParams],
  );

  // ページ切り替え
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log('Page changed to:', newPage); // Debug print
    setSearchParams((prevParams) => {
      return { ...Object.fromEntries(prevParams), page: newPage };
    });
  };

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
