import React, { useState, useEffect } from "react";
import { Table, Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { MdDelete } from "react-icons/md";
import EditDepartment from "./EditDepartment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../Uri";

function Department() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);
  };

  const deleteDepartment = async (departmentId) => {
    axios.delete(`/dept/deleteDepartment/${departmentId}`);
    loadData();
    notify();
  };

  return (
    <div>
      <Container-fluid>
        <Row>
          <Col>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Department Id</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{department.departmentName}</td>
                    <td>
                      <EditDepartment id={department.departmentId} />
                    </td>

                    <Button
                      className="rounded-pill"
                      variant="white"
                      onClick={() => deleteDepartment(department.departmentId)}
                    >
                      {" "}
                      <MdDelete />
                      Delete
                    </Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container-fluid>
    </div>
  );
}

export default Department;
