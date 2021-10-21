import { useState , useEffect } from "react";
import axios from 'axios'

const useOperation = () =>{
const [data , setData] = useState([{}])
const [categories , setCategories ] = useState([])

    useEffect( ()=>{
      getOperations()
    },[]);

    useEffect(()=>{
        getCategories();
    },[])

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


    const deleteOperation = (id) => {
        console.log("deleted",id)
    };

    const getCategories = () =>{
        axios.get("http://localhost:3000/categories")
        .then(res => {
            setCategories(res.data.categorias[0])
        })
        .catch(err =>{
            console.log(err)
        })
    }

    

    return { data, deleteOperation , categories,getCategories }
};

export default useOperation