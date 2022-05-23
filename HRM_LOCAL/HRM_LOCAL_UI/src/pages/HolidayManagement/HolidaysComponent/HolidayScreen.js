import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../../Uri";


import { Row, Col, Container } from "react-bootstrap";
// Testing Purpose 

// import Spinner from "react-bootstrap/Spinner";





export default function HolidayScreen() {
  
  
  const [holiday, setHoliday] = useState([]);
  function formatDate(fromDate){
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
   }
  

  useEffect(() => {
    axios.get("/holiday/getAllHolidays").then((res) => {
      console.log("loading started");
      console.log(res.data.data);
      
      setHoliday(res.data.data);
      console.log("loading ended")
    
    })
    
   
  }, []);
 

    return (
      <Container>
        <Row>
          <Col md={12}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Holiday Id</th>
            <th scope="col">Holiday Title</th>
            <th scope="col">Holiday Date</th>
          </tr>
        </thead>

        <tbody>
          {holiday && holiday.map((h, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{h.holidayTitle}</td> 
              <td>{formatDate(h.holidayDate)}</td>
            </tr>
          ))}
        </tbody>
</table>
</Col>
</Row>
</Container>
    );
  }