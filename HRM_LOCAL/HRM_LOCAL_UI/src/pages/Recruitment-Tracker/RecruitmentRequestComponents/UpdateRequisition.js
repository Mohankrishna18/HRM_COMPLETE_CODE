import React from "react";
import { useState, useEffect, useRef, createContext } from "react";
import axios from "../../../Uri";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Tab,
  Tabs,
  Button,
  Modal,
} from "react-bootstrap";
import UpdateRR from "./UpdateRR";

export const UserContext = createContext(null);

const UpdateRequisition=(props)=> {
  // console.log(props.rowData)
  const [data, setData] = useState([]);
  //const {rowData} = props
  const rowData = JSON.parse(localStorage.getItem("project"));
  console.log(rowData);

  // const rowData = props.rowData
  const [show, setShow] = useState(false);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const UpdatehandleClose = () => setShow(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [oneProject, setOneProject] = useState();

  // Get API's for Clients Dropdown

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);

  };

  const update_loading = (id) => {
    setUpdateLoading(!updateLoading);
  };
  return (
    <div>
      <UserContext.Provider value={{ data, setData }}>
        
                <UpdateRR
                  oneProject={oneProject}
                  func={props.func}
                  handleClose={UpdatehandleClose}
                  // fc={props.func}
                />
             
      </UserContext.Provider>
    </div>
  );
}

export default UpdateRequisition;