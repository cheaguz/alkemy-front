import React ,{ useState } from 'react'
import  {FormControl , InputLabel , Select , MenuItem } from '@material-ui/core'
import useOperation from '../../Hooks/useOperation';

const Categories = () => {
    const { categories , getCategories } = useOperation();
    const [state , setState] = useState({ 
        id: 1,
        nombre: ' ',
        labelWidth: 0,
    })
    
    const handleChange = event => {
        setState({ [event.target.name]: event.target.value });
      };
    return (
        <div>
            <button onClick={getCategories}> Categories  </button>
            <ul>
                {categories.map(cat =>(
                    <li key={cat.id}> {cat.nombre} </li>
                ))}
            </ul>

            <form>
               
            <FormControl style={{minWidth: 120}}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                id: 0,
                }}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {categories.map(cat=>(
                    <MenuItem key={cat.id+20}value={cat.id}> {cat.nombre}</MenuItem>
                ))}
            </Select>
            </FormControl>
            </form>
        </div>
    )
}

export default Categories
