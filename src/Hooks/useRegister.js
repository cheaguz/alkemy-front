import { useFormik } from 'formik';
import axios from 'axios'; 


const useRegister = () =>{
    const formik = useFormik({
        initialValues : {
            mail : "",
            password : ""
        },
        onSubmit: values => {
            axios.post('http://localhost:3000/users/register' ,values)
            .then( res => {
                console.log(res)
                alert(res.data.message);
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            });
          },
    });
    return [formik]
 
}

export default useRegister;