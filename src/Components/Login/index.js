import { createContext, useContext, useState } from "react"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { UserProfileContext } from "../Users"

// stlye
import "./index.css"

export const LoginContext = createContext()

export const Login = () =>{
    const userProfileData = useContext(UserProfileContext)
    const location = useLocation()
    const navigate = useNavigate()
    const context = useContext(LoginContext)
    const id = +location.state.from.pathname.split("/").pop()
    const realUser = userProfileData.userData.find(item => item.id === id)

    console.log(realUser)

    const validate = (value) => {
        if(value === realUser.email) {
            context.setValue(true)
            navigate(location.state.from.pathname)
        }
    }

    return (
        <div className="login-wrapper">
        <h1 className="heading">Sign In or Sign Up and connect with the world!</h1>
        <div className="form-wrapper">
            <form onSubmit={(e) =>{
                e.preventDefault();
                validate(e.target[0].value)
            }}>
                <input type="text" placeholder="email" />
                <input type="submit" value = "Sign In"/>
            </form>
        </div>
        </div>
    )
}

export const LoginProvider = ({children}) => {
    const [value , setValue] = useState(false);
    const obj = {value, setValue}
    return (
        <LoginContext.Provider value={obj}>
            {children}
        </LoginContext.Provider>
    )
}