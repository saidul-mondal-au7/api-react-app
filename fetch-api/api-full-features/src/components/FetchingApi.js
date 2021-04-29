import React, { useState, useEffect} from 'react';
import Loading from './Loading/Loading';
import Layout from './Layout'

function FetchingApi() {
    const [shipments, setShipments] = useState([])
    const [loading, setLoding] = useState(true)

    const getUsers = async() => {
        try {
            const response = await fetch("http://localhost:3000/shipments")
            const data = await response.json()
            setLoding(false)
            setShipments(data)
            console.log(data)
        } catch(e) {
            setLoding(false)
            console.log("My error is ", e)
        }
    }

    useEffect(() => {

       getUsers()

    }, [])

    if(loading) {
        return (
            <div>
               <Loading/>
            </div>
        )
    }
    return (
        <div>
        <Layout data={shipments}/>
        </div>
    )
}

export default FetchingApi
