import { useContext }from 'react';
import { useFormik } from 'formik';
import axios from 'axios'; 

import {LoginContext} from '../context/loginContext'


const useLogin = () =>{
    const { addToken } = useContext(LoginContext);
    const formik = useFormik({
        initialValues : {
            mail : "",
            password : ""
        },
        onSubmit: values => {
            axios.post('http://localhost:3000/users/login' ,values)
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


