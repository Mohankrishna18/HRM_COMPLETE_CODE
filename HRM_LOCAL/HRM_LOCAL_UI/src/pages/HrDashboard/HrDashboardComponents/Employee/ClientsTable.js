import React, { useEffect, useState } from 'react';
import { Button, Modal, Stack, Tab, Table, Tabs } from 'react-bootstrap';
import axios from "../../../../Uri"
import { FcWebcam } from 'react-icons/fc';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';

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
      { title: "Client ID", field: "clientId",color:"black" },
      { title: "Client Name", field: "clientName",color:"black" },
      { title: "Email", field: "email" },
      { title: "Phone Number", field: "phoneNumber" },  

    ]);
    console.log(data);

    return (
        <div>
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
                // backgroundColor: "#FFC47A",
                background: "#ffa442",
                fontSize:"14px",
                paddingBottom:"4px",
                paddingTop:"8px",
                color: "black",
              },
              exportButton: true,
            }}
          />
        </Grid>
      </div>   
    )
}
export default ClientTable;
