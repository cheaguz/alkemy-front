import React from 'react'
import  Operations  from '../Components/operations/Operations';
import Categories from '../Components/categories/Categories'
import NavBar from '../Components/NavBar'

import useOperation from '../Hooks/useOperation'


const HomePage = () => {
    const  { data , deleteOperation , getEgresos , getOperations , getIngresos ,getOperationByCategories , categories } = useOperation();

    return (
        <div>
        <NavBar />
            <Categories 
                getOperationByCategories={getOperationByCategories}
                categories={categories}
                getIngresos={getIngresos}
                getEgresos={getEgresos}
                getOperations={getOperations}
            />

            <Operations 
                data={data}
                deleteOperation={deleteOperation}
            />

        </div>
    )
}

export default HomePage
