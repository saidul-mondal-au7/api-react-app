import React, {useState} from 'react'

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
        <input type='text' value={idData.id} onChange={sortById} />
            {(idData.length>0) ? idData.map((item)=> {
                const {id, login, type } = item
                return (
                    <div>
                        <li key="jk123">{id} : Name - {login} & a {type}</li>
                    </div>
                )
            }) : data.map((item)=> {
                const {id, login, type } = item
                return (
                    <div>
                        <li key={item.id}>{id} : Name - {login} & a {type}</li>
                    </div>
                )
            }) }
        </div>
    )
}

export default GitHubUsers
