import { createContext, useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { usersURL } from "../../api"

// components
import WishList from "../WishList"

// style 
import "./index.css"

export const ShowUser = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`${usersURL}/${id}`)
        .then(resp => resp.json())
        .then(resp => setData(resp.data))
    }, [])

    return (
        <div className="main">
            {
                data && 
                <div className="mainInfo-wrapper">
                    <div className="left-footer">
                        <div className="avatar avatar-wrapper">
                            <img src={data.avatar} className="avatar"/>
                        </div>
                        <div className="info-wrapper">
                            <h3>{data.first_name} {data.last_name}</h3>
                            <h5>{data.email}</h5>
                        </div>
                    </div>
                        <div className="right-footer">
                            <p>Created by Tam Sargsyan</p>
                        </div>
                </div>
            }
            <WishList />
        </div>
    )
}
