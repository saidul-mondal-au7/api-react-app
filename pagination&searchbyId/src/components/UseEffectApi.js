import React, {useState, useEffect} from 'react'
import GitHubUsers from './github/GitHubUsers'
import Loading from './github/Loading';
import Pagination from './github/Pagination'

function UseEffectApi() {

    const [users, setUsers] = useState([])
    const [loading, setLoding] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(5)

    const getUsers = async() => {
        try {
            const response = await fetch("https://api.github.com/users");
            setLoding(false)
            const data = await response.json()
            setUsers(data)
        } catch(e) {
            setLoding(false)
            console.log("My error is ", e)
        }
         
    }
    useEffect(() => {
        getUsers()
    })
    // Get current posts
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if(loading) {
        return (
            <div>
              <Loading/>
            </div>
        )
    }
    return (
        <div>
          <GitHubUsers data={currentUsers}/>
          <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
    )
}

export default UseEffectApi
