import { useEffect, useState } from "react"
import { usersURL } from "../../api"
import { Link } from "react-router-dom"
import { createContext, useContext } from "react"
// style
import "./index.css"

export const UserProfileContext = createContext()

export const Users = () => {
    // const [data, setData] = useState([])
    const userContext = useContext(UserProfileContext)
    
    useEffect(() => {
        fetch(usersURL)
        .then(resp => resp.json())
        .then(resp => userContext.setUserData(resp.data))
    }, [])
    
    return (
        <div className="user-container">
            <div className="heading">
                <h1>Users</h1>
            </div>
            <div className="usersInfo-wrapper">
                {
                    userContext.userData && userContext.userData.map((item, id) => {
                        return (
                            <div className="user-item" key={item.id}>
                                <div className="user-avatar">
                                    <img src={item.avatar} />
                                </div>
                                <div className="info-wrapper">
                                    <h3>{item.first_name} {item.last_name}</h3>
                                    <Link className="readMore-btn" to={`/showUser/${item.id}`}>Read More</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const UserProfileProvider = ({children}) => {
    const [userData, setUserData] = useState([])
    const obj = {userData, setUserData}
    return (
        <UserProfileContext.Provider value={obj}>
            {children}
        </UserProfileContext.Provider>
    )
}