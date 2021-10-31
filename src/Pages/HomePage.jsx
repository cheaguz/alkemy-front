import React from 'react'
import  Operations  from '../Components/operations/Operations';
import Categories from '../Components/categories/Categories'
import NavBar from '../Components/NavBar'

import useOperation from '../Hooks/useOperation'
import useCategories from '../Hooks/useCategories';


const HomePage = () => {
    const  { data , deleteOperation , getEgresos , getOperations , getIngresos ,getOperationByCategories , updateOperation , newOperation} = useOperation();
    const { categories , newCategories} = useCategories()

    return (
        <div>
        <NavBar />
            <Categories 
                getOperationByCategories={getOperationByCategories}
                categories={categories}
                getIngresos={getIngresos}
                getEgresos={getEgresos}
                getOperations={getOperations}
                newCategories = {newCategories}
            />

            <Operations 
                data={data}
                deleteOperation={deleteOperation}
                updateOperation={updateOperation}
                newOperation= {newOperation}
            />

        </div>
    )
}

export default HomePage
