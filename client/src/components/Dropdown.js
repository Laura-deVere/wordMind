import React from "react";
import { dropdown } from "../sass/Dropdown.module.scss";
const Dropdown = ({list,handleDropDownClick}) => {
  return (
    <ul className={dropdown}>
      <li>Maybe one of these?</li>
      {list.map((item, index) => {
        return (
          <li 
            key={index} 
            onClick={()=>handleDropDownClick(item)}
            >
              {item}
          </li>
        )
      })}
    </ul>
  );
};

export default Dropdown;
