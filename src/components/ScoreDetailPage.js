import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { addToHistory } from './utils/historyUtils';
import Button from '@mui/material/Button';

const ScoreDetail = () => {
  const [searchParams] = useSearchParams(); // クエリパラメータを取得
  const navigate = useNavigate(); // useNavigateフックを使用
  const id = searchParams.get('id'); // "id" パラメータを取得
  const [resultItem, setResult] = useState(null);

  const handleBack = () => {
    navigate(-1); // 履歴内で1つ前のページに戻る
  };

  useEffect(() => {
    addToHistory(id); // 履歴に現在のIDを追加
    console.log('Current detail ID added to history:', id); // Debug print

    const savedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (savedResults) {
      const foundResult = savedResults.find(
        (item) => String(item.score_id) === id,
      );
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

  if (!resultItem) {
    return <div>該当する楽譜が見つかりません。</div>;
  }

  return (
    <div>
      <div class="item-card">
        <h1>{resultItem.title}</h1>
        <p>作曲家: {resultItem.composer}</p>
        <p>楽器: {resultItem.instrument}</p>
        <p>ジャンル: {resultItem.metadata.genre}</p>
        <p>楽譜URL(Drive): {resultItem.generated_score_url || 'URLなし'}</p>
        <p>所有ユーザ: {resultItem.user}</p>
        <p>動画url: {resultItem.video_url || 'URLなし'}</p>
        <p>
          始点, 終点: {resultItem.start_coordinate}, {resultItem.end_coordinate}
        </p>
        {/* 必要に応じて追加の情報を表示 */}
      </div>
      <Button variant="contained" color="primary" onClick={handleBack}>
        戻る
      </Button>
    </div>
  );
};

export default ScoreDetail;
