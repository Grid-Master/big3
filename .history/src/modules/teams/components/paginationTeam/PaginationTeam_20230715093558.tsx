import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.sass';
import ClosedEye from '../../../../assets/icons/ClosedEye';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const PaginationTeam = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<ClosedEye />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(items.length / 2)}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName={styles.break}
      breakLinkClassName={styles.breakLink}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
    />
  );
};

export default PaginationTeam;
