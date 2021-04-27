import React, {useState, useEffect} from 'react'
import GitHubUsers from './github/GitHubUsers'
import Loading from './github/Loading'

function UseEffectApi() {

    const [users, setUsers] = useState([])
    const [loading, setLoding] = useState(true)

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

    if(loading) {
        return (
            <div>
              <Loading/>
            </div>
        )
    }
    return (
        <>
          <GitHubUsers data={users}/>
        </>
    )
}

export default UseEffectApi
