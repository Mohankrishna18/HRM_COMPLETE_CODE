import React, { useState, useEffect } from 'react';
import ReactTable from '../../commonComponents/ReactTable';
import { Button, Modal, Tab, Table, Tabs, Row, Col, Card } from "react-bootstrap";
import Action from './Action';
import { tableConstants } from './Columns';
import axios from '../../Uri';
import Moment from 'react-moment';

export default function ChangeUserDetails(props) {
  const [data, setData] = useState([]);
  const [filteredVal, setFilteredVal] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };


  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((res) => {
        setData(res.data.data);
        setSearchApiData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateStatus]);

  console.log(searchApiData)
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setData(searchApiData)
    } else {
      const fetchResult = searchApiData.filter(item => item.fullName.toLowerCase().includes(e.target.value.toLowerCase()));
      console.log(fetchResult);
      setData(fetchResult);
      // if (fetchResult > 0) {
      //     setData(fetchResult);
      // }else{
      //     setData([{ employeeId: "No Data Available" }]);
      // }     
    }
    setFilteredVal(e.target.value);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Update an Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Action
            data={action}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div >
        <input placeholder="Search" value={filteredVal} onInput={(e) => handleFilter(e)} />
      </div>
      <div>
        {/* <ReactTable cols={tableConstants} data={data} /> */}

        <Table striped bordered hover responsive="xl">
          <thead style={{ backgroundColor: "#f5896e", color: "white" }}>
            <tr>
              <th style={{ color: "white" }}>Employee ID</th>
              <th style={{ color: "white" }}>Name</th>
              <th style={{ color: "white" }}>Bussiness Unit</th>
              <th style={{ color: "white" }}>Designation Name</th>
              <th style={{ color: "white" }}>Resignation Date</th>
              <th style={{ color: "white" }}>Exit Date</th>
              <th style={{ color: "white" }}>Status</th>
              <th style={{ color: "white" }}>Bands</th>
              <th style={{ color: "white" }}>Employment Type</th>
              <th style={{ color: "white" }}>IRM</th>
              <th style={{ color: "white" }}>SRM</th>
              <th style={{ color: "white" }}>Action</th>

            </tr>
          </thead>

          <tbody className="scroll">
            {data.map(data => {
              return (
                <tr>
                  <td>{data.employeeId}</td>
                  <td>{data.fullName}</td>
                  <td>{data.departmentName}</td>
                  <td>{data.designationName}</td>
                  <td> {data.resignationDate ? <Moment format="DD/MM/YYYY">
                    {data.resignationDate}
                  </Moment> : <></> }</td>
                  <td>{data.exitDate ? <Moment format="DD/MM/YYYY">
                    {data.exitDate}
                  </Moment> : <></>}</td>
                  <td>{data.status}</td>
                  <td>{data.band}</td>
                  <td>{data.employmentType}</td>
                  <td>{data.irm}</td>
                  <td>{data.srm}</td>
                  <td><Button
                    style={{ backgroundColor: "#f5896e" }}
                    data={data}

                    onClick={() => {
                      setShow(true)
                      console.log(props);
                      setAction(data.employeeId)
                    }}
                  > update
                  </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}