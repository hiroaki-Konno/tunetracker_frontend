import React from 'react';

const Pagination = ({ currentPage, setCurrentPage }) => {
  const handlePrevPage = () => {
    console.log('Pagination: Prev Page Clicked with currentPage:', currentPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log('Pagination: Next Page Clicked with currentPage:', currentPage);
    // ページの最大数（仮定）に応じて調整
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        前のページ
      </button>
      <span>ページ {currentPage}</span>
      <button onClick={handleNextPage}>次のページ</button>
    </div>
  );
};

export default Pagination;
