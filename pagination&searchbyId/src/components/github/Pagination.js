import React from 'react'
import './Pagination.css'
function Pagination(props) {
    const usersPerPage = props.usersPerPage;
    const totalUsers = props.totalUsers;
    const paginate = props.paginate
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href='!#'>
                    {number}
                    </a>
                </li>
        ))}
        </div>
    )
}

export default Pagination
