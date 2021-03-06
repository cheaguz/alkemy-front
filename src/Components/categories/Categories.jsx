import React , {useState}  from 'react'
import NewCategory from './newCategory';

import  {  Select, MenuItem , InputLabel , Container , Button, Grid  } from '@mui/material'

const Categories = (props) => {
    
    const { categories , getOperationByCategories , getEgresos , getIngresos ,getOperations , newCategories } = props;

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
                            
                                {categories.map(cat=>(
                                    <MenuItem  key={`cat${cat.id}`} value={cat.id}>
                                        {cat.nombre}
                                    </MenuItem> 
                                ))}
                            </Select>
                        </form>  

                        <NewCategory newCategories={newCategories}/>
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
