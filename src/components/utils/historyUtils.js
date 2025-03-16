// historyUtils.js
const MAX_HISTORY_COUNT = 5;

export const addToHistory = (id) => {
  const history = JSON.parse(sessionStorage.getItem('detailHistory')) || [];
  const updatedHistory = [
    id,
    ...history.filter((existingId) => existingId !== id),
  ];
  if (updatedHistory.length > MAX_HISTORY_COUNT) {
    updatedHistory.pop();
  }
  sessionStorage.setItem('detailHistory', JSON.stringify(updatedHistory));
};

export const getHistory = () => {
  return JSON.parse(sessionStorage.getItem('detailHistory')) || [];
};
