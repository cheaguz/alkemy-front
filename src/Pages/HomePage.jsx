import React from 'react'
import  Operations  from '../Components/operations/Operations';
import Categories from '../Components/categories/Categories'

import useOperation from '../Hooks/useOperation'


const HomePage = () => {
    const  { data , deleteOperation , getEgresos , getOperations , getIngresos ,getOperationByCategories , categories } = useOperation();

    return (
        <div>
          <div style ={{
              border: "1px solid blue",
              backgroundColor : "blue",
              color: 'white',
              textAlign : 'center'
          }}>Nav Bar</div>
            <Categories 
                getOperationByCategories={getOperationByCategories}
                categories={categories}
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
