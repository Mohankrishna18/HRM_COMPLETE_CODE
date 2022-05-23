import React, { useEffect, useState } from "react";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Pagination from "react-bootstrap/Pagination";
import EditDesignation from "./EditDesignation";
import { MdDelete } from "react-icons/md";
import {AiFillEdit } from 'react-icons/ai'
import { Table, Container, Button } from "react-bootstrap";

const DesignationTable = () => {
  const notify = () => toast("Designation is deleted Successfully");
  const [designations, setDesignations] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/designation/getAllDesignations");
    setDesignations(res.data);
    console.log(res.data);
    console.log("hai");
    
  };


  const deleteDesignation = async (designationId) => {
    axios.delete(`/designation/deleteDesignation/${designationId}`);
    loadData();
    notify();
    window.location.reload();
  };

  return (
    <div>
      <Container-fluid>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Designation Id</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {designations.map((designation, index) => (
              <tr>
                {/* <td>{designation.designationId}</td> */}
                <th scope="row">{index+1}</th>
                <td>{designation.designationName}</td>
                <td>{designation.departmentName}</td>
                <td><EditDesignation id={designation.designationId} designations={designations}/></td>

                <Button
                  className="rounded-pill"
                  variant="white"
                  onClick={() => deleteDesignation(designation.designationId)}
                >
                  {" "}
                  <MdDelete />
                  Delete
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination style={{ float: "right", color: "orange" }}>
          <Pagination.Prev />
          <Pagination.Ellipsis />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </Container-fluid>
    </div>
  );
};

export default DesignationTable;
