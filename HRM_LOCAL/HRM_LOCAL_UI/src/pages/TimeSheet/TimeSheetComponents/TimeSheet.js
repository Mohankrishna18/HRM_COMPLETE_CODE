import React from 'react'
import EmpTable from './EmpTable'
import Card from 'react-bootstrap/Card'
import Datamodal from './AddworkModal'
// import paginationFactory from "react-bootstrap-table2-paginator";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const TimeSheet = () => {
  return (
    <div>
      <Card>
        <Card.Header>
  <Card.Body>
    <Card.Title>TimeSheet</Card.Title>

  <Card.Subtitle className="mb-2 text-muted">Dashboard/TimeSheet <Datamodal/></Card.Subtitle>
</Card.Body>
  </Card.Header> 
</Card>
<EmpTable/>
    </div>


  )
}

export default TimeSheet
