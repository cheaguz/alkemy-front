import React , { useState } from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle} from '@mui/material'


const NewOperation = (props ) => {
    const { newOperation } = props;

    const [open , setState ] = useState(false)
    const [form , setForm] = useState({
      CONCEPTO : '',
      MONTO : 0,
      TIPO_OPERACION : '',
      CATEGORIA_ID : ''
    });

    const  handleClickOpen = () => {
        setState( true );
      };

      const handleClose = () => {
        setState( false );
      };

      const handleChange = ({target}) => {
        setForm({
          ...form,
          [target.id] : target.value
        })
      };

      const sendForm = () =>{
        console.log(form)
        newOperation(form)
      }


    return (
        <div>
        <Button  variant="outlined"  onClick={handleClickOpen}>
            Nueva Operacion
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Editar registro </DialogTitle>
        <DialogContent>

        {["CONCEPTO" , "MONTO" ,"TIPO_OPERACION","CATEGORIA_ID"].map(txt =>(
            <TextField
              autoFocus
              margin="dense"
              id={txt}
              label={txt}
              type="text"
              fullWidth
              key={txt}
              onChange={(e)=>(handleChange(e))}
            />
        ))}

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{sendForm(); setTimeout(handleClose , '1000')}} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default NewOperation
