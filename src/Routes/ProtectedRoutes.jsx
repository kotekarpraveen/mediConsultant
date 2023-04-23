
/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/




import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({
    children,
    headerFooterVisible = true,

}) => {

    const isAuthenticated = true;
    return ( <> {children}</>)
    
}

export default ProtectedRoutes













