// import Table from 'react-bootstrap/Table';


// function PMOTable() {


//     return (
//         <Table  bordered hover>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Business Unit</th>
//                     <th>Job Title</th>
//                     <th>No. Of Positions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>Cloud</td>
//                     <td>Manager</td>
//                     <td>21</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Developemt</td>
//                     <td>Full Stack Developer</td>
//                     <td>12</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>HR</td>
//                     <td>Requisition Head</td>
//                     <td>8</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Sales</td>
//                     <td>Client-Relation Manager </td>
//                     <td>9</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Mgmt</td>
//                     <td>Administrator</td>
//                     <td>11</td>
//                 </tr>
                

//             </tbody>
//         </Table>
//     );
// }

// export default PMOTable;





import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import Card from "react-bootstrap/Card";

import axios from "../../../../Uri";
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
           
            title: "No. Of Positions#",
            field: "positions",
        },

        

    ]);

    return (
        <div>

            {/* <Grid style={{ borderBlockEndWidth: "2px" }}> */}
            <MaterialTable
                title="AERS"
                columns={columns}
                style={{ color: "black", fontSize: "15px" }}
                data={data}
                editable={{}}
                options={{
                    showTitle: true,
                    pageSize: 6,
                    maxBodyHeight: 190,
                    pageSizeOptions: [6, 10, 15],
                    

                    headerStyle: {
                        backgroundColor: "#f5896e",
                        color: "white",
                        fontSize: "12px",
                        //height: "10px",
                        //fontWeight: 'bold'
                    },
                    rowStyle: {
                        fontSize: 14,
                    },
                    // addRowPosition: "first",
                    // actionsColumnIndex: -1,
                    search: false,
                    // grouping: true,
                    // exportButton: true,
                    toolbar:false
                }}

            />
            {/* </Grid> */}

            {/* <Example /> */}
        </div>
    );
}
export default PMOTable;
