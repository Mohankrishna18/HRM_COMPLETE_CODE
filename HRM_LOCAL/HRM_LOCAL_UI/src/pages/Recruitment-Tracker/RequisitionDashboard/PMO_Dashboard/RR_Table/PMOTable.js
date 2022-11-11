
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import Card from "react-bootstrap/Card";
import axios from "../../../../../Uri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";


const PMOTable = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/recruitmentTracker/getAllRequisitionRequests")
            .then((response) => {
                setData(response.data.data)
                console.log(response.data.data)


            })
            .catch((err) => { toast.error("data is not getting") })
    }, [])


    const [columns, setColumns] = useState([

        {

            title: "AERF ID",
            field: "requisitionId",
        },
        {

            title: "Client Name",
            field: "clientName",
        },
        {

            title: "Business Unit",
            field: "departmentName",
        },

        {

            title: " Job Title",
            field: "jobTitle",
        },

        {

            title: "Total Positions",
            field: "positions",
        },
        {

            title: "Request Initiated",
            field: "requestInitiatedDate",
        },
        {

            title: "Aging",
            field: "ageing",
        },



    ]);

    return (
        <div>

            {/* <Grid style={{ borderBlockEndWidth: "2px" }}> */}
            <MaterialTable
                title="AERS"
                columns={columns}
                style={{ color: "black", fontSize: "12px" }}
                data={data}
                editable={{}}
                options={{
                    showTitle: true,
                    pageSize: 10,
                    maxBodyHeight: 290,
                    pageSizeOptions: [10, 15],


                    headerStyle: {
                        background: "#f5896e",
                        fontSize: "14px",
                        paddingBottom: "4px",
                        paddingTop: "8px",
                        color: "white",

                    },
                    // addRowPosition: "first",
                    // actionsColumnIndex: -1,
                    search: false,
                    grouping: true,
                    // exportButton: true,
                    toolbar: false
                }}

            />
            {/* </Grid> */}

            {/* <Example /> */}
        </div>
    );
}
export default PMOTable;

// ***************** ==================================  *****************

// import React from 'react'
// import Table from 'react-bootstrap/Table'
// import { useEffect, useState } from 'react'
// import axios from "../../../../../Uri";

// import "react-toastify/dist/ReactToastify.css";




// const PMOTable = () => {



//     const [fieldsData, setFieldsData] = useState([])



//     useEffect(() => {
//         axios.get("/recruitmentTracker/getAllRequisitionRequests")
//             .then((response) => {
//                 setFieldsData(response.data.data)
//                 console.log(response.data.data)

//             })
//             .catch((err) => {
//                 toast.error("data is not getting")
//                 console.log(err)
//             })
//     }, [])


//     const renderedtable = (data, index) => {


//         return (
//             <tr key={index}>
//                 {/* <td>{index + 1}</td> */}
//                 <td>{data.requisitionId}</td>
//                 <td>{data.clientName}</td>
//                 <td>{data.departmentName}</td>
//                 <td>{data.jobTitle}</td>
//                 <td>{data.positions}</td>
//                 <td>{data.positions} </td>
//                 <td>{data.positions} </td>
//             </tr>
//         )
//     }

//     return (
//         <div>

//             <div className='scroll' style={{ height: '300px' }}>


//                 <Table hover className="table table-borderless"  >
//                     <thead align='center' style={{ fontSize: '10px' ,color:'#008000' , fontStyle:'revert' }}>
//                         <tr>
//                             <th>Job ID</th>
//                             <th>Client Name</th>
//                             <th>Business Unit</th>
//                             <th>Job Title</th>
//                             <th>Total Positions</th>
//                             <th>Request Initiated</th>
//                             <th>Aging </th>
//                         </tr>
//                     </thead>

//                     <tbody align='center' style={{ fontSize: '12px' }}>
//                         {fieldsData.map(renderedtable)}

//                     </tbody>

//                 </Table>

//             </div>

//         </div>
//     )
// }



// export default PMOTable;
