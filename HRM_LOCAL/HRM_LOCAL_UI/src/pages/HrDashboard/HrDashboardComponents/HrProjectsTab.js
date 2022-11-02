import React, { useState, useEffect, createContext } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import axios from "../../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
export const UserContext = createContext(null);

function HrProjectsTab() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);
  const [deleteOnboard, setDeleteOnboard] = useState({});
  const [deleteProjects, setDeleteProjects] = useState(false);

  const history = useHistory();
  const deleteHandleClose = () => setDeleteProjects(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const pull_dataDelete = () => {
    setDeleteProjects(!deleteProjects);
    // console.log("Delete");
  };

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus, deleteProjects]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/clientProjectMapping/getAllProjects");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
    {
      title: "Project Name",
      field: "projectName",
      // defaultGroupOrder: 1
    },
    {
      title: "Client Name",
      field: "clientName",
      type: "text",
    },
    {
      title: "Business Unit",
      field: "businessUnit",
      defaultGroupOrder: 0,
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
    // {
    //   title: "Description",
    //   field: "description",
    // },
    // {
    //   title: "Rate",
    //   field: "rate",
    // },
    {
      title: "Priority",
      field: "priority",
    },
    {
      title: "PM",
      field: "projectManager",
    },
  ]);

  return (
    <div>
        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Projects"
            columns={columns}
            style={{ color: "black", fontSize: "13px" }}
            data={data ? data : []}
            editable={{}}
            options={{
              headerStyle: {
                backgroundColor: "#FF9E14",

                color: "white",

                fontSize: "16px",

                paddingTop: "5px",

                paddingBottom: "2px",
              },

              pageSize: 15,

              pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

              maxBodyHeight: 550,

              addRowPosition: "first",

              actionsColumnIndex: -1,

              grouping: true,

              exportButton: true,
            }}
          />
        </Grid>
    </div>
  );
}
export default HrProjectsTab;
