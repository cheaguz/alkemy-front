import React , {useState}  from 'react'
import useOperation from '../../Hooks/useOperation';
import  { FormControl , InputLabel, Select, MenuItem  } from '@mui/material'

const Categories = (props) => {
    
    const { categories , getOperationByCategories } = props;

 /*    const [age, setAge] = useState(''); */

    const handleChange = (event) => {
      console.log('id', event.target.value );
      getOperationByCategories( event.target.value )
    
    };

    return (
        <div>   
                 <form> 
                    <select onChange={handleChange}> 
                        {categories.map(cat=>(
                            <option 
                                key={cat.ID}
                                value={cat.ID}
                                label={cat.NOMBRE}
                            >  </option>
                            
                        ))}
                    </select>
                </form>   
{/* 
                <FormControl style={{width : "120px"}}>
                    <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                    <Select
                        label={'Categorias'}
                        onChange={handleChange}
                    >
                        {categories.map(cat=>(
                            <MenuItem key={cat.ID} value={cat.ID}>  {cat.NOMBRE}  </MenuItem>
                        ))}

                    </Select>
                    </FormControl> */}
        </div>
    )
}

export default Categories
