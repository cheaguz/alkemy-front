import { useState , useEffect } from "react";
import { operationApi  } from '../api/axios'

const useOperation = () =>{
const [data , setData] = useState([{}])


    useEffect( ()=>{
      getOperations()
    },[]);

    const getOperations = async () =>{
        try{
            const operations = await operationApi.get()
            setData(operations.data[0]);
        }catch(err){
            console.log(err)
        }
    };


    const deleteOperation = async (id) => {
        try {
            const delOperation = await operationApi.delete(`${id}`)
            alert(delOperation.data.message)
            getOperations();
        } catch (err) {
            console.log(err)
        }
    };

    const getOperationByCategories = async (nombre)=>{
        try {
            const opByCategory = await operationApi.get(`/${nombre}`)
            setData(opByCategory.data.res[0])
        } catch (error) {
            console.log(error)
        }
    };

    const getEgresos = async () =>{
        try {
            const egresos = await operationApi.get('/egreso')
            setData(egresos.data[0])
        } catch (error) {
            console.log(error)
        }
    };

    const getIngresos = async () =>{
        try {
            const ingresos = await operationApi.get('/ingreso')
            setData(ingresos.data[0])
        } catch (error) {
            console.log(error)
        }
    };

    const updateOperation = async (id , data)  =>{
        try {
            const editOperation = await operationApi.put(`/${id}` , {data})
            console.log(editOperation)
        } catch (error) {
            console.log(error)
        }
    };

    const newOperation = async (form) => {
        try {
            await operationApi.post('/' , form)
            alert('Operacion creada con exito!')
        } catch (error) {
            console.log(error)
            alert('hubo un error')
        }
    }
    

    return { data,
         deleteOperation ,
          getEgresos ,
          getOperations ,
          getIngresos,
          getOperationByCategories,
          updateOperation,
          newOperation
        }
};

export default useOperation