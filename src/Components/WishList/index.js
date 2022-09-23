import { useEffect, useState } from "react"
import { productsURL } from "../../api"
import { Link } from "react-router-dom"

// style
import "./index.css"

// components
import Spinner from "../Spinner"

const WishList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(productsURL)
        .then(resp => resp.json())
        .then(resp => {
            setData(resp.products)
            setLoading(true)
        })
    }, [])
    return (
        <div className="wishlist-container">
            <div className="heading-wrapper">
                <h1>Your WishList</h1>
            </div>
            <div className="wishlistInfo-wrapper">
                {
                    loading ? 
                        data &&
                        data.map((item, id) => (
                            <div className="wishlist-item" key={item.description}>
                                <div className="img-wrapper">
                                    <img src={item.thumbnail} />
                                </div>
                                <div className="info-wrapper">
                                    <h3>{item.title}</h3>
                                    <p>{item.price}$</p>
                                </div>
                            </div>
                        ))
                            :
                        <Spinner />
                }
            </div>
        </div>
    )
}
export default WishList