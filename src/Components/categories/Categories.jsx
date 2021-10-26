import React  from 'react'
import useOperation from '../../Hooks/useOperation';

const Categories = () => {
    const { categories , getEgresos } = useOperation();

    return (
        <div>   
                <form> 
                    <select> 
                        {categories.map(cat=>(
                            <option key={cat.ID}> {cat.NOMBRE} </option>
                            
                        ))}
                    </select>
                </form>  
        </div>
    )
}

export default Categories
