import React from 'react'
import  Operations  from '../Components/operations/Operations';
import Categories from '../Components/categories/Categories'

import useOperation from '../Hooks/useOperation'


const HomePage = () => {
    const  { data , deleteOperation , getEgresos , getOperations , getIngresos} = useOperation();

    return (
        <div>
            this is a home 
            <Categories 
                getEgresos={getEgresos}
            />

            <Operations 
                data={data}
                getEgresos={getEgresos}
                getOperations={getOperations}
                getIngresos={getIngresos}
                deleteOperation={deleteOperation}
            />
        </div>
    )
}

export default HomePage
