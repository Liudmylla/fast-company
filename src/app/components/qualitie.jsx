import React from 'react';

const Qualitie = ({ color, name, _id }) => {

    const getColor = (color) => {
        return "badge m-2 bg-" + color
    }
    return (

        <span
            className={getColor(color)}
        >{name}</span>

    );
}

export default Qualitie;