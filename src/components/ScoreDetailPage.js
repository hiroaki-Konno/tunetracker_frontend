import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addToHistory } from './utils/historyUtils';

const ScoreDetail = () => {
  const [searchParams] = useSearchParams(); // クエリパラメータを取得
  const id = searchParams.get('id'); // "id" パラメータを取得
  const [result, setResult] = useState(null);

  useEffect(() => {
    addToHistory(id); // 履歴に現在のIDを追加
    console.log('Current detail ID added to history:', id); // Debug print

    const savedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (savedResults) {
      const foundResult = savedResults.find((item) => String(item.id) === id);
      setResult(foundResult);
    } else {
      // ローカルストレージが空の場合、APIを叩いて取得
      const fetchDetailData = async () => {
        const response = await fetch(`http://localhost:8000/api/scores/${id}`);
        const data = await response.json();
        setResult(data);
      };
      fetchDetailData();
    }
  }, [id]);

  if (!result) {
    return <div>該当する楽譜が見つかりません。</div>;
  }

  return (
    <div>
      <h1>{result.title}</h1>
      <p>作曲家: {result.artist}</p>
      <p>ジャンル: {result.genre}</p>
      {/* 必要に応じて追加の情報を表示 */}
    </div>
  );
};

export default ScoreDetail;
