import React  from 'react';

import {Table , TableBody ,TableCell , TableHead , TableRow , Paper , Container , Button} from '@material-ui/core'

import EditOperation from './EditOperation'

   
const Operations = (props) => {
 const {getEgresos , getIngresos , getOperations , data , deleteOperation} = props
    return (
        <Container>
          <Container>
            <Button variant="contained"  color="secondary" onClick={getEgresos}> EGRESO </Button>
            <Button variant="outlined"  color="secondary" onClick={getIngresos}> Ingresos </Button>
            <Button variant="outlined"  color="secondary" onClick={getOperations}>  All </Button>
          </Container>

          <Paper style={{width: '100%',overflowX: 'auto'}}>
            <Table style={{minWidth: 600}}>
              <TableHead>
                <TableRow>
                  <TableCell>ID </TableCell>
                  <TableCell align="right"> CONCEPTO </TableCell>
                  <TableCell align="right"> MONTO </TableCell>
                  <TableCell align="right"> TIPO_OPERACION </TableCell>
                  <TableCell align="right"> CATEGORIA </TableCell>
                  <TableCell align="right"> ACTION  </TableCell>
                </TableRow>
              </TableHead>

            <TableBody>

              {data.map(op => (
                  <TableRow key={op.ID*5}>
                    <TableCell component="th" scope="row">
                      {op.ID }
                    </TableCell>
                    <TableCell align="right">{op.CONCEPTO}</TableCell>
                    <TableCell align="right">{op.MONTO}</TableCell>
                    <TableCell align="right">{op.TIPO_OPERACION}</TableCell>
                    <TableCell align="right">{op.CATEGORIA_ID}</TableCell>
                    <TableCell align="right">
                      <button onClick={()=>{deleteOperation(op.ID)}}> X </button>
                      <EditOperation /> 
                      </TableCell>
                  </TableRow>
              ))}

            </TableBody>
          </Table>
        </Paper>
      </Container>

    )
}

export default Operations
