import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

function AddRole() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
      return (
          <div style={{ justifyContent: "center" }}>
            <Button onClick={() => setLgShow(true)} className="rounded-pill" variant='warning' style={{
              color: "#F4F8F6", backgroundColor: "#FF9B44",
              float: "left"
            }}> <BsPlusLg /> Add Role</Button>
            <Modal
              size="ms"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton >
                <Modal.Title id="example-modal-sizes-title-lg"  >
                  Add Role
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
            <Form className="formLabel"  style={ {padding :9} }>
              <Row className="mb-5" >
                <Form.Group as={Col} md="12" style={ {padding :7 } } controlId="validationCustom01">
                  <Form.Label>Role Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Role name"
                  />
                </Form.Group>
                </Row>
            </Form>
  
          
                <div class="text-center">
                  <Button variant="warning" className="rounded-pill" style={{ color: "#F4F8F6", backgroundColor: "#FF9B44" }}
                    onClick={handleClose} >Submit</Button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
      
        );
}

export default AddRole