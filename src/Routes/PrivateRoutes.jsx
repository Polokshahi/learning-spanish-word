import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate state={location} to="/login" />;
    }
   
};

export default PrivateRoutes;