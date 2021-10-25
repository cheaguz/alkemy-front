import React  from 'react'
import useOperation from '../../Hooks/useOperation';

const Categories = () => {
    const { categories , getEgresos } = useOperation();

    return (
        <div>
            <ul>
                {categories.map(cat=>(
                    <li key={cat.ID}><button onClick ={getEgresos}>{cat.NOMBRE} </button> </li>
                    
                ))}
            </ul>
           
        </div>
    )
}

export default Categories
