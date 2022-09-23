import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { LoginContext } from "../Components/Login"

export const Authtorization = ({children}) => {
    const context = useContext(LoginContext)
    const location = useLocation()
    if(!context.value) {
        return <Navigate to="/login" state={{from: location}}/>
    }
    return children
}
