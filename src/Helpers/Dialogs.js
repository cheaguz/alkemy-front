import React , { useState}from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle} from '@mui/material'

const Dialogs = (props) => {

    return (
        <>
        <Button  variant="outlined" /*color="primary" */ onClick={props.handleClickOpen}>
          {props.icon}
        </Button>
        <Dialog
          open={props.open}  //props . open
          onClose={props.handleClose} // props.onCli
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> {props.title} </DialogTitle>
          <DialogContent>
        {}
          {props.txField.map(txt =>(
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
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={props.handleClose} color="primary">
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}

export default Dialogs
