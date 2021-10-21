import React from 'react'

import {Table , TableBody ,TableCell , TableHead , TableRow , Paper} from '@material-ui/core'

const styles = theme => ({
    root: {
      width: '100%',

      overflowX: 'auto',
    },
    table: {
      minWidth: 600,
    },
  });
  
  let id = 0;

 
  function createData(name, calories, fat, carbs, protein , action) {
    id += 1;
    return { id, name, calories, fat, carbs, protein , action};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0 , "X" ),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, "X"),
    createData('Eclair', 262, 16.0, 24, 6.0, "X"),
    createData('Cupcake', 305, 3.7, 67, 4.3, "X"),
    createData('Gingerbread', 356, 16.0, 49, 3.9, "X"),
  ];

  
const Operations = (props) => {
    return (
        <div>
            <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="right"> CONCEPTO </TableCell>
            <TableCell align="right"> MONTO </TableCell>
            <TableCell align="right"> TIPO_OPERACION </TableCell>
            <TableCell align="right"> CATEGORIA_ID </TableCell>
            <TableCell align="right"> action  </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"><button> {row.action}</button> <button>V</button> </TableCell>
            </TableRow>
          ))}

        </TableBody>

      </Table>
    </Paper>
        </div>
    )
}

export default Operations
