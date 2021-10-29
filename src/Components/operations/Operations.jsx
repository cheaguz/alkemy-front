import React  from 'react';

import {Table , TableBody ,TableCell , TableHead , TableRow , Paper , Container} from '@mui/material'

import EditOperation from './EditOperation'

   
const Operations = (props) => {
 const { data , deleteOperation} = props
    return (
        <Container>
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
                  <TableRow key={op.ID}>
                    <TableCell component="th" scope="row">
                      {op.ID }
                    </TableCell>
                    <TableCell align="right">{op.CONCEPTO}</TableCell>
                    <TableCell align="right">{op.MONTO}</TableCell>
                    <TableCell align="right">{op.TIPO_OPERACION}</TableCell>
                    <TableCell align="right">{op.NOMBRE}</TableCell>
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
