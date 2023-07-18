import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.sass';
import NextIcon from '../../../assets/icons/NextIcon';
import PreviousIcon from '../../../assets/icons/PreviousIcon';

interface IPaginationTeam {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const PaginationTeam: FC<IPaginationTeam> = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<NextIcon />}
      onPageChange={handlePageChange}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(items.length / 2)}
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

export default PaginationTeam;
