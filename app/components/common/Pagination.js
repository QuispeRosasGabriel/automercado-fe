"use client";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange({ page });
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        key={i}
        className={`page-item ${i === currentPage ? "active" : ""}`}
        onClick={() => handleClick(i)}
      >
        <span className="page-link">{i}</span>
      </li>
    );
  }

  return (
    <ul className="page_navigation d-flex align-items-center justify-content-center gap-1">
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handleClick(currentPage - 1)}
      >
        <span className="page-link">
          <i className="fa fa-arrow-left" />
        </span>
      </li>
      {pages}

      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => handleClick(currentPage + 1)}
      >
        <span className="page-link">
          <i className="fa fa-arrow-right" />
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
