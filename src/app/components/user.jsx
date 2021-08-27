import React from 'react';
import Qualitie from './qualitie';
import Bookmark from './bookmark';

const User = ({ onToggle, onDelete, _id, name, profession, qualities, completedMeetings, rate, status }) => {

    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{profession.name}</td>
            <td>
                {qualities.map((qualitie) => (
                    <Qualitie
                        key={qualitie._id}
                        {...qualitie}
                    />
                ))}
            </td>
            <td>{completedMeetings}</td>
            <td>{rate} </td>
            <td>
                <Bookmark
                    id={_id}
                    status={status}
                    onToggle={onToggle}
                />
            </td>
            <td><button
                className="btn btn-danger"
                onClick={() => onDelete(_id)}
            >delete</button></td>
        </tr >
    )

}

export default User;