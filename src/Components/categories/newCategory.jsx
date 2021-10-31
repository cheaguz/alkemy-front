import React , { useState } from 'react'
import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle,} from '@mui/material';

const NewCategory = (props) => {
    const [open , setState ] = useState(false)
    
    const [data , setData ] = useState({
      nombre : ''
    })

    const  handleClickOpen = () => {
        setState( true );
      };

      const handleClose = () => {
        setState( false );
      };

      const handleChange = (event) => {
        setData({
          ...data,
          nombre : event.target.value
        })
       console.log(data)
      };

    return (
        <>
        <Button  variant="outlined" /*color="primary" */ onClick={handleClickOpen}>
          +
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Nueva Categoria </DialogTitle>
          <DialogContent>

              <TextField
                autoFocus
                margin="dense"
                id="Nombre"
                label="Nombre"
                type="text"
                fullWidth
                onChange = {handleChange}
              />
          
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>(props.newCategories(data))} color="primary">
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}



export default NewCategory
