import { useState , useEffect } from "react";
import axios from 'axios'

const useOperation = () =>{
const [data , setData] = useState([{}])

    useEffect( ()=>{
      getOperations()
    },[]);

    const getOperations = () =>{
        axios.get("http://localhost:3000/operation")
        .then(res =>{
            setData(res.data[0]);
            console.log(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    };

    return { data }
};

export default useOperation