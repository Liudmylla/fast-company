import React from "react"
import PropTypes from "prop-types"
const Bookmark = ({ status, onToggle, id }) => {
    const getClass = (status) => {
        return status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
    }
    return (
        <button onClick={() => onToggle(id)}>
            <i className={getClass(status)}></i>
        </button>
    )
}
Bookmark.propTypes = {
    status: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}
export default Bookmark
