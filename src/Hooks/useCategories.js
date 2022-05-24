import { useState , useEffect } from "react";
import { categoriesApi } from '../api/axios'

const useCategories = () => {
    const [categories , setCategories ] = useState([]);
    
    useEffect(()=>{
        getCategories();
    },[])
 
    const getCategories = async () =>{
        try{
            const categories = await categoriesApi.get()
            setCategories(categories.data.categorias[0])
        }catch(err){
            console.log(err)
        }
    };

    const newCategories = async (nombre) =>{
        const newCategories = await categoriesApi.post('', nombre)
    }
    return {
        categories ,
        getCategories,
        newCategories
    }
}

export default useCategories
