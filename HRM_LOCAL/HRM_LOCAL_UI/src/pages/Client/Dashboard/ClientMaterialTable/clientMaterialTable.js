import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
// import ClientUpdatedForm from "../Client/ClientComponents/ClientUpdatedForm";
// import AddClient from "./ClientComponents/AddClient";
// import DeleteClient from "./ClientComponents/DeleteClient";
// import ClientView from "./ClientComponents/ClientView";

const ClientMaterial = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/clientProjectMapping/getAllClients")
            .then((response) => {
                setData(response.data.data)
                console.log(response.data.data)


            })
            .catch((err) => { toast.error("data is not getting") })
    }, [])


    const [columns, setColumns] = useState([


        {
            // changed the tilte name only, in backend its still taken as client name
            title: "Company Name",
            field: "clientName",
        },

        {
            // changed the tilte name only, in backend its still taken as client name
            title: " Email",
            field: "email",
        },

        {
            // changed the tilte name only, in backend its still taken as client name
            title: "Contact",
            field: "phoneNumber",
        },

        // {
        //     title: "Start Date",
        //     field: "startDate",
        //     type: "date",
        //     dateSetting: { locale: "en-GB" },
        // },
        // {
        //     title: "End Date",
        //     field: "endDate",
        //     type: "date",
        //     dateSetting: { locale: "en-GB" },
        // },

        {
            title: "Status",
            field: "status",
        },

        {
            title: "Country",
            field: "country",
        },

        {
            title: "Address",
            field: "address",
        },
    ]);

    return (
        <div>

            {/* <Grid style={{ borderBlockEndWidth: "2px" }}> */}
            <MaterialTable
                title="Clients/Company"
                columns={columns}
                style={{ color: "black", fontSize: "15px" }}
                data={data}
                editable={{}}
                options={{
                    showTitle: false,
                    pageSize: 6,
                    maxBodyHeight: 480,
                    pageSizeOptions: [6, 10, 15, 20, 30, 50, 75, 100],

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
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    grouping: true,
                    // exportButton: true,
                }}

            />
            {/* </Grid> */}

            {/* <Example /> */}
        </div>
    );
}
export default ClientMaterial;
