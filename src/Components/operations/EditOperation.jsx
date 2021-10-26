import React , { useState}from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle,} from '@mui/material'

const EditOperation = (props) => {
    const [open , setState ] = useState(false)

    const  handleClickOpen = () => {
        setState( true );
      };

      const handleClose = () => {
        setState( false );
      };

    return (
        <>
        <button /* variant="outlined" color="primary" */ onClick={handleClickOpen}>
          E
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Editar registro </DialogTitle>
          <DialogContent>

          {["Concepto" , "Monto" ,"Categoria"].map(txt =>(
              <TextField
                autoFocus
                margin="dense"
                id={txt}
                label={txt}
                type="text"
                fullWidth
                key={txt}
              />
          ))}
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

export default EditOperation
