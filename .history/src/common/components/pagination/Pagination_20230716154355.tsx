import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.sass';
import NextIcon from '../../../assets/icons/NextIcon';
import PreviousIcon from '../../../assets/icons/PreviousIcon';

interface IPagination {
  // currentPage: number;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  // page: number;
  pageCount: number;
  handlePageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: FC<IPagination> = ({
  // currentPage,
  // setCurrentPage,
  // page,
  pageCount,
  handlePageChange,
}) => {
  // const handlePageChange = (selectedPage: { selected: number }) => {
  //   setCurrentPage(selectedPage.selected + 1);
  // };

  // const handleFirstPage = () => {
  //   setCurrentPage(1)
  // }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<NextIcon />}
      onPageChange={handlePageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={<PreviousIcon />}
      renderOnZeroPageCount={null}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.previous}
      previousLinkClassName={styles.previousLink}
      nextClassName={styles.next}
      nextLinkClassName={styles.nextLink}
      breakClassName={styles.break}
      breakLinkClassName={styles.breakLink}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
    />
  );
};

export default Pagination;
