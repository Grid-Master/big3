import { FC } from 'react';
import ReactPaginate from 'react-paginate';
const items = [1, 2, 3, 4, 5];

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
    />
  );
};

export default PaginationTeam;
