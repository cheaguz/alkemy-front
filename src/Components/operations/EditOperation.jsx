import React , { useState}from 'react'

import { Button , TextField , Dialog ,DialogActions , DialogContent ,DialogTitle, SvgIcon} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
const EditOperation = (props) => {
  const { updateOperation , id} = props;

    const [open , setState ] = useState(false)
    const [form , setForm] = useState({
      CONCEPTO : '',
      MONTO : 0,
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
        console.log(form)
      };

      const sendForm = () => {
        updateOperation(id , form)

      };

    return (
        <>
        <button /* variant="outlined" color="primary" */ onClick={handleClickOpen}>
          <SvgIcon> <CreateIcon /> </SvgIcon>
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Editar registro </DialogTitle>
          <DialogContent>

          {["CONCEPTO" , "MONTO" ,"CATEGORIA_ID"].map(txt =>(
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
            <Button onClick={(e)=>(sendForm(e))} color="primary">
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}

export default EditOperation
