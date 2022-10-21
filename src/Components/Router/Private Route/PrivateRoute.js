import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();
    if (loading){
        return     <Spinner animation="border" variant="warning" />;
    }
        if (!user) {
            return <Navigate to="/login" state={{ from: location }} replace></Navigate>
        }
    return children;
};

export default PrivateRoute;