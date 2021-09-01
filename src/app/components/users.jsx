import React, { useState } from "react"
import User from "./user"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"
const Users = ({ users: allUsers, onDelete, onToggle }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const count = allUsers.length
    const pageSize = 4
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const users = paginate(allUsers, currentPage, pageSize)
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился,раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User
                                key={user._id}
                                {...user}
                                onDelete={onDelete}
                                onToggle={onToggle}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    map: PropTypes.func
}
export default Users
