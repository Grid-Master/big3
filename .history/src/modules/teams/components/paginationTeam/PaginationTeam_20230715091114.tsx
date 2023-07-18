import { FC } from 'react';
import ReactPaginate from 'react-paginate';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const PaginationTeam = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={Math.ceil(items.length / 2)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default PaginationTeam;
