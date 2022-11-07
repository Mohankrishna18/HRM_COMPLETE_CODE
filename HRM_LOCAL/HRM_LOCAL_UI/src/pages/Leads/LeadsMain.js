import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import LeadsUpdatedForm from "../Leads/LeadsComponents/LeadsUpdatedForm";
import AddLeads from "./LeadsComponents/AddLeads";
import DeleteLeads from "./LeadsComponents/DeleteLeads";
import LeadsView from "./LeadsComponents/LeadsView";


function LeadsMain() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [deleteLeads, setDeleteLeads] = useState(false);
  const deleteHandleClose = () => setDeleteLeads(false);
  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);
  const addPocHandleClose = () => setAddPocShow(false);
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
    const response = await axios.get("/Leads/getAllLeads");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([


    {
      // changed the tilte name only, in backend its still taken as lead name
      title: "Lead Name",
      field: "leadName",
    },
    {
      title: "Status",
      field: "status",
    },
    {
      // changed the tilte name only, in backend its still taken as company name
      title: "Company Name",
      field: "companyName",
    },
    {
      // changed the tilte name only, in backend its still taken as company email
      title: "Email",
      field: "companyEmail",
    },
    // {-
    //   title: "Phone Number",
    //   field: "companyPhoneNumber",
    // },
    // {
    //   title: "Address",
    //   field: "companyAddress",
    // },
    // {
    //   title: "Country",
    //   field: "companyCountry",
    // },
    // {
    //   // changed the tilte name only, in backend its still taken as source name
    //   title: "Source Name",
    //   field: "sourceName",
    // },
    // {
    //   // changed the tilte name only, in backend its still taken as source email
    //   title: "Email",
    //   field: "sourceEmail",
    // },
    // {
    //   title: "Phone Number",
    //   field: "sourcePhoneNumber",
    // },
    // {
    //   title: "Business Value",
    //   field: "businessValue",
    // },
    // {
    //   // changed the tilte name only, in backend its still taken as lead name
    //   title: "Lead Notes",
    //   field: "leadNotes",
    // },
    {
      title: "POC Name",
      field: "pocName",
    },
    // {
    //   title: "Email",
    //   field: "pocEmail",
    // },
    {
      title: "Phone Number",
      field: "pocPhoneNumber",
    }
  ]);

  return (
    <div>
      {/* edit modal */}
      {/* <Modal show={addPocShow} onHide={addPocHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Add POC</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <AddPOC
            addPoc={addPoc}
            func={pull_dataUpdate}
            handleClose={addPocHandleClose}
          />
        </Modal.Body>
      </Modal> */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Edit Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <LeadsUpdatedForm
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>

      </Modal>


      {/* view modal */}
      <Modal  show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Lead Overall Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LeadsView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button style ={{backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",}} onClick={viewHandleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      {/* delete modal */}
      <Modal show={deleteLeads} onHide={deleteHandleClose}
        size="md"
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color: "white" }}>
          <Modal.Title>Delete Leads</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteLeads deleteOnboard={deleteOnboard} func={pull_dataDelete} deleteHandleClose={deleteHandleClose} />
        </Modal.Body>
      </Modal>




      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        {/* <Row>
          <Col>
        <h3>
        Onboarded Shortlisted Candidates
        </h3>
        </Col>
        <Col>
        <AddOnboard func={pull_data} />
        </Col>
        </Row> */}
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Leads</Card.Title>
             
            </Col>
            <Col>
              <AddLeads func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Leads"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              pageSize: 8,
              pageSizeOptions: [8, 10, , 15, 20, 30, 50, 75, 100],
              maxBodyHeight: 450,
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
                    {/* <Button
                      variant="info"
                      onClick={(event) => {
                        setAddPocShow(true);
                        console.log(props);
                        setAddPoc(props.data);
                      }}

                      style={{
                        backgroundColor: "#ff9b44",
                        color: "#F4F8F6",
                        float: "right",
                        borderRadius: "20px",
                        height: "40px",
                        width: "130px",

                      }}
                    >
                      <MdOutlinePersonAddAlt style={{ fontSize: "20px" }} />
                      &nbsp;
                      Add Poc
                    </Button> */}
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
                        setDeleteLeads(true);
                        console.log(props);
                        setDeleteOnboard(props.data);
                      }}
                    >
                      {/* Delete icon*/}
                      <RiDeleteBin6Line />
                    </Button>

                    {/* <Button
                      variant="secondary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setDeleteClient(props.data);
                      }}
                    >
                      Delete
                    </Button> */}

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

export default LeadsMain;
