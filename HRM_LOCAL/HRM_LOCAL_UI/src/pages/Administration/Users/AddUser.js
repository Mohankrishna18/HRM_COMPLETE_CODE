import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

function AddUser() {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
    return (
        <div style={{ justifyContent: "center" }}>
          <Button onClick={() => setLgShow(true)} className="rounded-pill" variant='warning' style={{
            color: "#F4F8F6", backgroundColor: "#FF9B44",
            float: "right"
          }}> <BsPlusLg /> Add User</Button>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton >
              <Modal.Title id="example-modal-sizes-title-lg"  >
                Add User
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <Form className="formLabel"  style={ {padding :15} }>
            <Row className="mb-5" >
              
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Person Type</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="employee">Employee</option>
                  <option value="client">Client</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          {/* {value == null ? (<div></div>) : (<div>    <Grid container direction="row" justifyContent="left" alignItems="left">
      <Grid item xs={6}>
        <BedSummaryChart buildingId={buildingId} />
      </Grid>
      {/* <Grid item xs={6}>
        <PaymentSummaryChart buildingId={buildingId} />
      </Grid> 
    </Grid>
      <BuildingsLayout buildingId={buildingId} />    
      </div>)} */}
            </Modal.Body>
          </Modal>
        </div>
    
      );
}

export default AddUser