import React from 'react'
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { headerName: 'Name', width: 70 , renderCell:params=><AvtarComponent data={params}/>},
    { field: 'employeeId', headerName: 'Employee ID', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'dateOfJoining',
      headerName: 'DOJ',
      type: 'date',
      width: 100,
    },
    {
      field: 'designationName',
      headerName: 'Role',
      width: 160,
    },
  ];

function dataGrid(props) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
    )
}

dataGrid.propTypes = {}

export default dataGrid
