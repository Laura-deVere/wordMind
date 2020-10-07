import React from "react";
import buttonStyles from "../sass/Buttons.module.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const numberOfPages = [];
  // calculate page numbers
  console.log("paggynation", itemsPerPage, totalItems, paginate);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  return (
    <nav>
      <ul>
        {numberOfPages.map((number) => {
          return (
            <li key={number}>
              <button
                className={`${buttonStyles.btn} ${buttonStyles.btn__white} ${buttonStyles.btn__small}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
