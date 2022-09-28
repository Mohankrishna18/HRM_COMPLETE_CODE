import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Table, Tabs,Row } from "react-bootstrap";
import axios from "../../../../Uri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";


function AllEmployees(props) {
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState("1");
  const [viewShow, setViewShow] = useState(false);
  const [viewOnboard, setViewOnboard] = useState({});
  const viewHandleClose = () => setViewShow(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        console.log(res.data.data.employeeid);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
  console.log(data);



  return (
    <div className="responsive">
      <Modal show={viewShow} onHide={viewHandleClose} size="xl">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}
        </Modal.Body>
      </Modal>

      {/* <HRConfirmation /> */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Join Date</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.fullName}</td>
              <td>{data.employeeId}</td>
              <td>{data.email}</td>
              <td>{data.primaryPhoneNumber}</td>
              <td>{data.dateOfJoining}</td>
              <td>{data.designationName}</td>
              <td>
                <Row>
              <Button
                  variant="white "
                  className="rounded-pill"
                  onClick={(event) => {
                    setViewShow(true);
                    console.log(props);
                    setViewOnboard(props.data);
                  }}
                >{" "}
                  <AiTwotoneEdit/> Edit
                </Button>
                  {/* <Button
                    variant="white "
                    className="rounded-pill"
                    onClick={(event) => {
                      setViewShow(true);
                      console.log(props);
                      setViewOnboard(props.data);
                    }}
                  > {" "}
                    <AiFillDelete/>Delete
                  </Button> */}
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllEmployees;
