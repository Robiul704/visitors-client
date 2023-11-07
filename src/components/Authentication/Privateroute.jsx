import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <p></p>
    }  
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'} state={location.pathname}>
            
        </Navigate>
    );
};

export default Privateroute;