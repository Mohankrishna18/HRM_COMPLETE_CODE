import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import ClientUpdatedForm from "../Client/ClientComponents/ClientUpdatedForm";
import AddClient from "./ClientComponents/AddClient";
import DeleteClient from "./ClientComponents/DeleteClient";
import ClientView from "./ClientComponents/ClientView";

function ClientMain() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const [deleteClients, setDeleteClients] = useState(false);

  const deleteHandleClose = () => setDeleteClients(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});


  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(true);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  const pull_dataDelete = () => {

    setDeleteStatus(!deleteStatus);
    // console.log("Delete");

  };

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus, deleteStatus]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/clientProjectMapping/getAllClients");
    setData(response.data.data);
    console.log(response.data);
  };

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

    {
      title: "Start Date",
      field: "startDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "End Date",
      field: "endDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },

    {
      title: "Status",
      field: "status",
    },
    {
      title: "POC Name",
      field: "pocName",
    },

    // {
    //   title: "Country",
    //   field: "country",
    // },

    // {
    //   title: "Address",
    //   field: "address",
    // },
  ]);

  return (
    <div>
      {/* edit modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Edit Client</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <ClientUpdatedForm
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>

      </Modal>


      {/* view modal */}
      <Modal style={{ maxHeight: "1200px", maxWidth: "1550px", position: "absolute", }} show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Company Overall Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <ClientView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button style ={{backgroundColor: "#f5896e",
                    borderColor: "#f5896e",}} onClick={viewHandleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      {/* delete modal */}
      <Modal show={deleteClients} onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color: "white" }}>
          <Modal.Title>Delete Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteClient deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>
      </Modal>



      <Card
        style={{
          paddingTop: "10px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Clients/Company</Card.Title>
              
            </Col>
            <Col>
              <AddClient func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Clients/Company"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
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
              // grouping: true,
              exportButton: true,
            }}
            actions={[
              {
                icon: "button",
                tooltip: "Save User",
                onClick: (event, rowData) =>
                  alert("You want to delete " + rowData.firstName),
              },
            ]}
            components={{
              Action: (props) => (
                <div>
                  <Stack direction="horizontal" gap={3}>
                    {/* edit button */}
                    <Button
                      variant="info"
                      onClick={(event) => {
                        setShow(true);
                        console.log(props);
                        setUpdateOnboard(props.data);
                      }}
                    >
                      {/* Edit icon */}
                      <FiEdit />
                    </Button>{" "}

                    {/* delete button */}
                    <Button
                      variant="danger"

                      onClick={(event) => {
                        setDeleteClients(true);
                        console.log(props);
                        setDeleteOnboard(props.data);
                      }}
                    >
                      {/* Delete icon*/}
                      <RiDeleteBin6Line />
                    </Button>                    

                    {/* view button */}
                    <Button
                      variant="primary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                    >
                      {/* view icon */}
                      <BsFillEyeFill />
                    </Button>

                  </Stack>
                </div>
              ),
            }}
          />
        </Grid>
      </Card>
      {/* <Example /> */}
    </div>
  );
}
export default ClientMain;
