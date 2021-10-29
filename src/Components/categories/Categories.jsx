import React , {useState}  from 'react'
import NewCategory from './NewCategory';

import  {  Select, MenuItem , InputLabel , Container , Button, Grid  } from '@mui/material'

const Categories = (props) => {
    
    const { categories , getOperationByCategories , getEgresos , getIngresos ,getOperations } = props;

     const [value, setValue] = useState(''); 

    const handleChange = (event) => {
      getOperationByCategories( event.target.value )
      setValue(event.target.value)
    
    };

    return ( 
        <Container>
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <div>
                        <form style={{display : "inline-block"}}> 
                            <InputLabel id="demo-simple-select-label"  >Categorias</InputLabel>
                            <Select onChange={handleChange} value={value} displayEmpty > 
                                <MenuItem value="" disabled>Categorias </MenuItem>
                                {categories.map(cat=>(
                                    <MenuItem  key={cat.ID}value={cat.ID}label={cat.NOMBRE}>
                                        {cat.NOMBRE}
                                    </MenuItem> 
                                ))}
                            </Select>
                        </form>  

                        <NewCategory />
                    </div>
                </Grid>

                <Grid item xs={4} right>
                    <div style={{marginTop : "7%"}}>
                        
                        <Button variant="outlined" onClick={getEgresos} > EGRESO </Button>
                        <Button variant="outlined"   onClick={getIngresos}> Ingresos </Button>
                        <Button variant="outlined"   onClick={getOperations}>  All </Button>
                        
                    </div>           
                </Grid>

            </Grid>
           
        </Container>
                
                

      
    )
}

export default Categories
