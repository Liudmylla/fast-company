import React from "react"
import PropTypes from "prop-types"
const Qualitie = ({ color, name }) => {
    const getColor = (color) => {
        return "badge m-2 bg-" + color
    }
    return <span className={getColor(color)}>{name}</span>
}
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
export default Qualitie
