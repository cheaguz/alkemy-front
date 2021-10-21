import React , { createContext} from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const addToken = (token)=>{
        localStorage.setItem("token", token)
    };

    const removeToken = () =>{
        localStorage.removeItem("token")
    };

    const validateToken = () =>{
        const token = localStorage.getItem("token")
        if(token){
            return true
        }else {
            return false
        }
       
    }

    return (
        <LoginContext.Provider value={{addToken , removeToken, validateToken }}>
            { children }
        </LoginContext.Provider>
    )
}