import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table'

import Grid from '@mui/material/Grid'

const ReusableTable = ({ titlee, columnes, dataa, editablee }) => {

    return (

        <>

            <Grid>
                <MaterialTable
                    title={titlee}
                    columns={columnes}
                    data={dataa}
                    editable={editablee}
                    options={{
                        paging: false,
                        addRowPosition: 'first',
                        actionsColumnIndex: -1,
                        // filtering: true,

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



export default ReusableTable;