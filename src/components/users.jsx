import React, { useState } from 'react';
import api from '../api'
import 'bootstrap/dist/css/bootstrap.css'
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {

        setUsers(users.filter(user => user._id !== userId))
    }
    const renderFrase = (number) => {
        let result

        switch (number) {

            case 0:
                result = "Пичалька, никто не тусанет с тобой сегодня"
                break;
            case 12:
            case 13:
            case 14:
                result = number + "  человек тусанет с тобой сегодня"
                break;
            case +String(number).match(/\d*[234]$/):

                result = number + "  человекa тусанет с тобой сегодня"

                break;
            default:
                result = number + "  человек тусанет с тобой сегодня"
                break;
        }
        return result

    }
    const getColor = (color) => {
        return "badge m-2 bg-" + color
    }
    const chooseColor = () => {
        return users.length !== 0 ? 'primary' : 'danger'
    }
    return (
        <>
            <div className={getColor(chooseColor())}>{renderFrase(users.length)}</div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился,раз</th>
                        <th scope="col">Оценка</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (

                        <tr key={user._id}>
                            <td>{user.name} </td>
                            <td>
                                {user.qualities.map((q) => (
                                    <span
                                        className={getColor(q.color)}
                                    >{q.name}</span>
                                ))}
                            </td>
                            <td>
                                {user.profession.name}
                            </td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate} </td>
                            <td><button
                                className="btn btn-danger"
                                onClick={() => handleDelete(user._id)}
                            >delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};


export default Users;