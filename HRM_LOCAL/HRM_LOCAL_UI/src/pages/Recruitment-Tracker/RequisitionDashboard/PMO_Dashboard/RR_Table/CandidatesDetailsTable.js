
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import Card from "react-bootstrap/Card";
import axios from "../../../../../Uri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";


const CandidatesDetailsTable = () => {


    const [data, setData] = useState([])

useEffect(() => {
    axios.get("/candidate/getCandidate")
        .then((response) => {
            setData(response.data)
            console.log(response.data)


        })
        .catch((err) => { toast.error("data is not getting") })
}, [])

console.log(data);
    const [columns, setColumns] = useState([


        {

            title: "Candidate Name",
            field: "candidateName",
        },
        {

            title: "Status",
            field: "candidateStatus",
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

            title: "Project Name",
            field: "projectName",
        },
        {

            title: "Primary Skills",
            field: "primarySkills",
        },
        {

            title: "Secondary Skills",
            field: "secondarySkills",
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
                    pageSizeOptions: [ 10, 15],


                    headerStyle: {
                        background: "#f5896e",
                fontSize:"11px",
                paddingBottom:"4px",
                paddingTop:"8px",
                color: "white",

                    },
                    // addRowPosition: "first",
                    // actionsColumnIndex: -1,
                    search: false,
                    grouping: true,
                    // exportButton: true,
                    toolbar:false
                }}

            />
            {/* </Grid> */}

            {/* <Example /> */}
        </div>
    );
}
export default CandidatesDetailsTable;


