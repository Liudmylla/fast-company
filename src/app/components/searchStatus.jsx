import React from 'react';
const SearchStatus = ({ length }) => {

    const renderFrase = (number) => {
        let result

        switch (number) {

            case 0:
                result = "Пичалька, никто не тусанет с тобой сегодня"
                break;
            case 1:
                result = number + "  человек тусанет с тобой сегодня"
                break;
            case +String(number).match(/\d*[1][234]$/):
                result = number + "  человек тусанут с тобой сегодня"
                break;
            case +String(number).match(/\d*[234]$/):

                result = number + "  человекa тусанут с тобой сегодня"

                break;
            default:
                result = number + "  человек тусанут с тобой сегодня"
                break;
        }
        return result

    }
    const getColor = (color) => {
        return "badge m-2 bg-" + color
    }
    const chooseColor = () => {
        return length !== 0 ? 'primary' : 'danger'
    }
    return (

        <div className={getColor(chooseColor())}>{renderFrase(length)}</div>

    );
}

export default SearchStatus;