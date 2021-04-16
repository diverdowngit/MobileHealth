// Goal is to check if token is valid and then give access to dashboard

import React from "react";
import { Route, Redirect} from "react-router-dom";
import { decodeToken } from "../../utils/auth"

// react is sensitive to capital letter as Component
const ProtectedRoute =({component: Component, onLogout, ...rest})=>{
    // console.log({ decodedToken: decodeToken()})
    return (
    <Route
        {...rest}
        render={props =>
            decodeToken()? 
                (<Component {...props} onLogout={onLogout}/> )
                : 
                (<Redirect to={{
                pathname:"/auth",
                //user might login from different places of your app. so here you can save the place
                state:{ from: props.location}}}/>)
            }
        />
    )
}

export default ProtectedRoute