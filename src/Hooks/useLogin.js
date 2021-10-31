import { useContext}from 'react';
import { useFormik } from 'formik';
import { userApi } from '../api/axios'

import {LoginContext} from '../context/loginContext'


const useLogin = () =>{
    const { addToken } = useContext(LoginContext);

    const formik = useFormik({
        initialValues : {
            mail : "",
            password : ""
        },
        onSubmit: values => {      
            userApi.post('/login',values)
            .then( res => {
                alert("Login exitoso");
                addToken(res.data.token)
                
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            });
          },
    });
    return [formik]
 
}

export default useLogin;


