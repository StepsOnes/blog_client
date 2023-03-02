import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";


export const PrivateRoute = ({children}) => {
    const token = Cookies.get('token')

    if (!token) {
        return <Navigate to={'/login'} />
    }

    return children
}