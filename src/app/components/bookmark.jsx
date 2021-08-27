import React from 'react';


const Bookmark = ({ status, onToggle, id }) => {
    const getClass = status => {
        return status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
    }
    return (
        <button
            onClick={() => onToggle(id)}
        >
            <i className={getClass(status)}></i>
        </button>

    );
}

export default Bookmark;