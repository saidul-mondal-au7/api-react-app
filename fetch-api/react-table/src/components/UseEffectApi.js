import React, {useState, useEffect} from 'react'
import Loading from './loading/Loading';
import Pagination from './pagination/Pagination';
import BasicTable from './view/BasicTable';
import Navbar from '../components/view/Navbar'

function UseEffectApi() {

    const [users, setUsers] = useState([])
    const [loading, setLoding] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(20)
    const [idData, setIdData] = useState("")
   
    const sortById = (e) => {
            setIdData(e.target.value)
            console.log(idData)
    }
     

    const getUsers = async() => {
        try {
            const response = await fetch("http://localhost:3000/shipments");
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
    },[])
    //search by id
    useEffect(() => {
        const results = users.filter((ele) =>
          ele.id.toLowerCase().includes(idData)
        );
        // if(idData === )
        setUsers(results);
      }, [idData]);
    
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
          <Navbar callback={sortById} data={idData}  />
          <BasicTable data={currentUsers}/>
          <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
    )
}

export default UseEffectApi