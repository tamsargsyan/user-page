import { NavLink, Outlet } from "react-router-dom"

// style 
import "./index.css"

const Layout = () => {
    return (
        <div className="main">
            <div className="container">
                    <header className="header-wrapper">
                        <div className="logo-wrapper">
                            <h1>Logo</h1>
                        </div>
                        <div className="link-wrapper">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                            <NavLink to="/users">Users</NavLink>
                        </div>
                        <div className="header-footer">
                            <p>Created by Solvee LLC</p>
                        </div>
                    </header>
                <div className="body-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout