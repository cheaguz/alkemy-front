import React , { useState}from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle} from '@material-ui/core'

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


            
            <TextField
              autoFocus
              margin="dense"
              id="Concepto"
              label="Concepto"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Monto"
              label="Monto"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Categoria"
              label="Categoria"
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

export default EditOperation
