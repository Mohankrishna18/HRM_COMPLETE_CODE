import React, { useEffect, useState } from 'react';
import { Button, Modal, Stack, Tab, Table, Tabs } from 'react-bootstrap';
import axios from "../../../../Uri"
import { FcWebcam } from 'react-icons/fc';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from 'react-icons/bs';
import {Col,Row } from "react-bootstrap";
import LeadsView from "../../../Leads/LeadsComponents/LeadsView";

function LeadTable(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [onboardID, setOnboardID] = useState({});
  const [update, setUpdate] = useState(false);
  const [reject, setReject] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [viewOnboard, setViewOnboard] = useState({});
  const viewHandleClose = () => setViewShow(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  useEffect(() => {
    loadData();
  }, [update, onboardID, reject]);
  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const empID = da.data.employeeId;
  const loadData = async () => {
    const res = await axios.get(
      `/Leads/getAllLeads`
    )
    const sata = res.data.data.filter(item => item.status === 'Approved')
    //   setData(res.data.data);
    console.log(res.data);
    setData(sata)
  };
  console.log(data.length);
  const [columns, setColumns] = useState([
    { title: "Lead ID", field: "id", color: "black" },
    { title: "Lead Title", field: "leadName", color: "black" },
    { title: "Lead Notes", field: "leadNotes" },
    { title: "Client Title", field: "companyName", defaultGroupOrder: 0 },
    {
      title: "Start Date", field: "startDate", type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "End Date", field: "endDate", type: "date",
      dateSetting: { locale: "en-GB" },
    }
  ]);
  console.log(data);

  return (
    <div>
        <Modal  show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
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
          <Button variant="secondary" onClick={viewHandleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Grid>
        <MaterialTable
          title="Leads    "
          // {(data.length)+"  Offer Released"}
          icons={data.length}
          columns={columns}
          data={data}
          options={{
            paging: true,
            grouping: true,
            header: "4px",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            pageSize: 10,
            pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],
            maxBodyHeight: 370,
            headerStyle: {
              // backgroundColor: "#FFC47A",
              background: "#ffa442",
              fontSize: "14px",
              paddingBottom: "4px",
              paddingTop: "8px",
              color: "black",
            },
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
                  <Button
                    variant="primary"
                    onClick={(event) => {
                      setViewShow(true);
                      console.log(props);
                      setViewOnboard(props.data);
                    }}
                  ><BsFillEyeFill /></Button>
                </Stack>
              </div>
            ),
          }}

        />


      </Grid>
    </div>
  )
}
export default LeadTable;
