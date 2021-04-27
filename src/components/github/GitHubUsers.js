import React, {useState} from 'react'
import './Git.css'
function GitHubUsers(props) {
    const [idData, setIdData] = useState([])
    const data = props.data
    const sortById = (e) => {
            setIdData(
                data.filter(element =>element.id == e.target.value)
            )
            console.log(idData)
    }
     

    return (
        <div>
        Search by Id-
        <input type='text' value={idData.id} onChange={sortById} />
            {(idData.length>0) ? idData.map((item)=> {
                const {id, login, type } = item
                return (
                    <div>
                        <table align="center" cellpadding="10">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                            </tr>
                            <tr>
                                <td >{id}</td>
                                <td >{login}</td>
                                <td >{type}</td>
                            </tr>
                        </table>
                    </div>
                )
            }) : data.map((item)=> {
                const {id, login, type } = item
                return (
                    <div>
                        <table align="center" cellpadding="10" cellSpacing="5">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                            </tr>
                            <tr>
                                <td >{id}</td>
                                <td >{login}</td>
                                <td >{type}</td>
                            </tr>
                        </table>
                    </div>
                )
            }) }
        </div>
    )
}

export default GitHubUsers
