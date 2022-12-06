import React, { useEffect, useState } from 'react';
import { Button, Modal, Stack, Tab, Table, Tabs } from 'react-bootstrap';
import axios from "../../../../Uri"
import { FcWebcam } from 'react-icons/fc';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';
import { BsFillEyeFill } from 'react-icons/bs';
import ClientView from "../../../Client/ClientComponents/ClientView";

function ClientTable(props) {
    const [data, setData] = useState([]);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
 
    useEffect(() => {
      loadData();
    }, [update, onboardID, reject]);
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.employeeId;
    const onboardingStatus = "CEOApproved";
    const loadData = async () => {
      const res = await axios.get(
        `/clientProjectMapping/getAllClients`
      );
      const sata1 = res.data.data.filter(item => item.status === 'Active')
      console.log(res.data);
      setData(sata1)
    };
    console.log(data.length);
    const [columns, setColumns] = useState([
      // { title: "Client ID", field: "clientId",color:"black" },
      { title: "Client Name", field: "clientName",color:"black" },
      { title: "Email", field: "email" },
      { title: "Contact", field: "phoneNumber" },  
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

    ]);
    console.log(data);

    return (
        <div>
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
        <Grid>
          <MaterialTable 
            title="Clients"
            // {(data.length)+"  Offer Released"}
            icons={data.length}
            columns={columns}
            data={data}
            options={{
              paging: true,
              header: "4px",
              addRowPosition: "first",
              actionsColumnIndex: -1,
              pageSize: 10,
              pageSizeOptions: [10,15,20, 30 ,50, 75, 100],
              maxBodyHeight: 370,
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
export default ClientTable;
