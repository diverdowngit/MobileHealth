import React, { useReducer, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UsersContext from './UsersContext';
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import serverUrl from "../utils/serverUrl"
import UsersReducer from './UsersReducer';
import { SET_USERS_CONTEXT, CLEAR_USERS_CONTEXT } from './actions';
const { REACT_APP_NAME, REACT_APP_BACKEND_API_HEROKU} = process.env

const UsersState = (props) => {
    const { children } = props;
    const history = useHistory();

    const initialState = {
        usersContext: null
    }

    const [credentials, setCredentials] = useState();
    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const setAuthHeaders= ()=>{
        const token = Cookies.get(`${REACT_APP_NAME}-auth-token`);
        // console.log({ tokenInsideUserComputer: token })
        if (token){
        //***********axios.defaults doesnt work also somehow
           axios.defaults.headers.common['Authorization']= `Bearer ${token}`
          // console.log("jsdlgfa")
          return true // will be helpful in App.js- useEffect, to see if you already logged in
        } else {
          return false
        }
      }

      const login= async (credentials)=>{
        let authorization= false
        await axios( {
            method: 'post',
            url: `${serverUrl}/auth/login`,
            headers: { 
              'Content-Type': 'application/json',
            },
            data : credentials
          })
          .then(function (response) {
            // console.log(response);
            const token= response.headers["x-authorization-token"];
            if(token){
              //we save JWT here, but need to verify the JWT in the backend to be sure its valid as it is very easy to change in in FE
                Cookies.set(`${REACT_APP_NAME}-auth-token`, token)
                // console.log("Cookiset")
                authorization= true
            }  else {
                throw new Error(`Authentication  - failed`)}
            
          })
          .catch(function (error) {
            console.log(error);
          })
        return authorization
    }

    const userContext = async () => {
        setAuthHeaders()
        try {
          const { role } = decodeToken()
          const userContext = await axios.get(`${serverUrl}/${role}/me`)
          userContext.data.role = role;
        //   console.log('userContext', {userContext})
          dispatch({ type: SET_USERS_CONTEXT, payload: userContext});
         } catch (e) { 
           console.error(e.message)
          }
       }

       const decodeToken=()=>{
        const token= Cookies.get(`${REACT_APP_NAME}-auth-token`);
        let decodedToken;
        try{
          //decode manually or or package jwt
          if(token){
            decodedToken = jwt.decode(token)
          }
        } catch(e){
          console.log(e.message)
        } 
        return decodedToken
      }

      const logout=()=>{
        Cookies.remove(`${REACT_APP_NAME}-auth-token`)
        dispatch({ type: CLEAR_USERS_CONTEXT })
      }

      const handleAuthentication = async (location) => {
        let isAuthenticated = await login(credentials);
        // console.log({isAuthenticated})
        //here is a mistake, somehow it return undefined and not true
        // isAuthenticated = true
        if(isAuthenticated){
          if (location=== "Dash") {
            history.push("/dashboard")}
          if (location === "Back"){
             history.goBack()}
        } else {
          alert("Wrong credentials, try again")
        }
      };

      const handleSetCredentials = (e) => {
        e.persist();
        // console.log(e.target.value)
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [e.target.name]: e.target.value,
        }));
      };

      const isLoggedIn = async () => {
        const token = Cookies.get(`${REACT_APP_NAME}-auth-token`);

        if (token) await userContext();
      };


    return (
        <UsersContext.Provider value={{
            usersContext: state.usersContext,
            setAuthHeaders,
            userContext,
            login,
            decodeToken,
            logout,
            handleSetCredentials,
            handleAuthentication,
            isLoggedIn
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersState;