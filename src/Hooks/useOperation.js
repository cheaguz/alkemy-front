import { useState , useEffect } from "react";
import axios from 'axios'

const useOperation = () =>{
const [data , setData] = useState([{}])
const [categories , setCategories ] = useState([]);

    useEffect( ()=>{
      getOperations()
    },[]);

    useEffect(()=>{
        getCategories();
    },[])

    const getOperations = () =>{
        axios.get("http://localhost:3000/operation")
        .then(res =>{
            console.log('data',res.data[0])
            setData(res.data[0]);
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
    };

    const getOperationByCategories = (nombre)=>{
        console.log('nombre recibido',nombre)
        axios.get(`http://localhost:3000/operation/${nombre}`) 
        .then(res => {
            setData(res.data.res[0])
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const getEgresos = () =>{
        axios.get('http://localhost:3000/operation/egreso')
        .then(res => {
            console.log(res)
            setData(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    };

    const getIngresos = () =>{
        axios.get('http://localhost:3000/operation/ingreso')
        .then(res => {
            setData(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    };

    

    return { data,
         deleteOperation ,
          categories,
          getCategories ,
          getEgresos ,
          getOperations ,
          getIngresos,
          getOperationByCategories,
        }
};

export default useOperation