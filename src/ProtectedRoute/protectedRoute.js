import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
// impor { outle} 

const ProtectedRoute = ({ isAuthenticated, children, isAdminRoute='false', isAdmin='false' })=> {
    const location = useLocation()
console.log("isAuthenticated" + isAuthenticated)
if(!isAuthenticated){
    console.log(location)
    // if(location.pathname=='/signup')
    //     return <Navigate to='/signup'/>
    return <Navigate to='/login'/>
}

if(isAdminRoute && !isAdmin)
    return <Navigate to='/profile'/>

    return children ? children : <Outlet/>
}

export default ProtectedRoute