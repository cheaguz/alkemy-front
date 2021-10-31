import React  from 'react';

import {Table , TableBody ,TableCell , TableHead , TableRow , Paper , Container  } from '@mui/material'
import DeleteIcon  from '@mui/icons-material/Delete';

import EditOperation from './EditOperation'
import NewOperation from './NewOperation';

   
const Operations = (props) => {
 const { data , deleteOperation , updateOperation , newOperation} = props
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
                  <TableRow key={op.CONCEPTO}>
                    <TableCell component="th" scope="row">
                      {op.ID }
                    </TableCell>
                    <TableCell align="right">{op.CONCEPTO}</TableCell>
                    <TableCell align="right">{op.MONTO}</TableCell>
                    <TableCell align="right">{op.TIPO_OPERACION}</TableCell>
                    <TableCell align="right">{op.CATEGORIA_ID}</TableCell>
                    <TableCell align="right">
                      <button onClick={()=>{deleteOperation(op.ID)}}> <i> <DeleteIcon /> </i> </button>
                      <EditOperation updateOperation={updateOperation} id={op.ID} /> 
                      </TableCell>
                  </TableRow>
              ))}

            </TableBody>
          </Table>
        </Paper>

        <NewOperation newOperation={newOperation}/>

      </Container>

    )
}

export default Operations
