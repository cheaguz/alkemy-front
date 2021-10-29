import React , { useState } from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle,} from '@mui/material';

const NewCategory = () => {
    const [open , setState ] = useState(false)

    const  handleClickOpen = () => {
        setState( true );
      };

      const handleClose = () => {
        setState( false );
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
              />
          
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}



export default NewCategory
