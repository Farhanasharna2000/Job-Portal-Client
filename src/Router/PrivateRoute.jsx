import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg "></span>
    }
    return <Navigate to={'/signIn'} state={location?.pathname}/>
};
PrivateRoute.propTypes = {
  
    children: PropTypes.array,
}
export default PrivateRoute;