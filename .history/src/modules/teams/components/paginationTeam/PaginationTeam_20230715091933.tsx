import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.sass';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const PaginationTeam = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(items.length / 2)}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={styles.pagination}
      activeClassName="active"
    />
  );
};

export default PaginationTeam;
