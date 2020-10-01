import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const numberOfPages = [];
  // calculate page numbers
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  return (
    <nav>
      <ul>
        {numberOfPages.map((number) => {
          return (
            <li>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
