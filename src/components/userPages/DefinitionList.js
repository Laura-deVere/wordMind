import React, { useState } from 'react';
import Pagination from '../Pagination';

const DefinitionList = ({list}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [listLength, setListLength] = useState(list.length);

    const renderDefintionList = (shortdef) => {
        return shortdef.map((def, index) => {
            return (
                <li key={index}>{def}</li>
            )
        })
    }

    const renderList = (list) => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
        return currentItems.map((item, index) => {
            return (
                <li key={index}>
                    <p>{item.fl}</p>
                    <hr />
                    <ol>
                        {renderDefintionList(item.shortdef)}
                    </ol>
                </li>
            );
        });
    };

    const paginate = (number) => {
        setCurrentPage(number);
    }

    return (
        <>
        <ul>{renderList(list)}</ul>
        <Pagination 
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={listLength}/>
        </>
    )
}

export default DefinitionList;