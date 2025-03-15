import React from 'react';

const ScoreDetailCard = (props) => {
  const item = props.item;
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.artist}</p>
      <p>{item.genre}</p>
    </div>
  );
};

export default ScoreDetailCard;
