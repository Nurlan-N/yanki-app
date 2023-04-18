import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';


const Pagination = ({ count, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={count}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
