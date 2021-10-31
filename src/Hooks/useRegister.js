import { useFormik } from 'formik';
import { userApi } from '../api/axios'


const useRegister = () =>{
    const formik = useFormik({
        initialValues : {
            mail : "",
            password : ""
        },
        onSubmit: values => {
            userApi.post('/register' , values)
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