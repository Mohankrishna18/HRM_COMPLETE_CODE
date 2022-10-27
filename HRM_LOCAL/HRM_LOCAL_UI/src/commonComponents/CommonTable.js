import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
const CommonTable = ({ title, columns, data, actions, components, editable }) => {
    return (
        <>
            <Grid>
                <MaterialTable
                    title={title}
                    columns={columns}
                    data={data}
                    actions={actions}
                    components={components}
                    editable={editable}
                    options={{
                        paging: false,
                        addRowPosition: 'first',
                        actionsColumnIndex: -1,
                        filtering: true,
                        headerStyle: {

                            backgroundColor: "#FE924A",

                            color: "white",

                        },
                        exportButton: true
                    }}
                />
            </Grid>
        </>
    )
}

export default CommonTable;