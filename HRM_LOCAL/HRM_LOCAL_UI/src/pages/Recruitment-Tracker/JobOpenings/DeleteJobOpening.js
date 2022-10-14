import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Modal from "react-bootstrap/Modal";
import axios from "../../../Uri";

function DeleteJobOpening(props) {
    console.log(props.deleteOnboard)
    const Delete = () => {
        props.deleteHandleClose();
    }
    const deleteRR = async () => {
      try {
          const res = await axios.delete(`/Leads/deleteLead/${props.deleteOnboard.id}`)
              .then((deletedResponse) => {
                  // const user = deletedResponse.data
                  // console.log(deletedResponse);
                  if (deletedResponse.data) {
                      props.func();
                      toast.success("Job Opening deleted successfully!!!");
                  }
                  else {
                      console.log("Props not Send")
                  }

                  // console.log(user);
              })
      }
      catch (error) {
          console.log(error)
      }
      props.deleteHandleClose()
  }
  return (
    <div>
            <Row>
                <Col>
                    <Row>
                        <Modal.Body>
                            <Col style={{ paddingLeft: "10px", border: 0,fontSize:"20px" }}> Are you sure you want to delete job opening{props.deleteOnboard.jobTitle}?
                            </Col>
                        </Modal.Body>
                    </Row>
                    <Row>
                        <Modal.Footer style={{ borderTop: "none" }}>
                            <Col style={{
                                textAlign: "right", marginLeft: "300px"
                            }}>
                                {/* <Button onClick={deleteLeads}>Yes</Button> */}
                                <Button>Yes</Button>
                            </Col>
                            <Col>
                                {/* <Button onClick={Delete}>No</Button> */}
                                <Button>No</Button>
                            </Col>
                        </Modal.Footer>
                    </Row>
                </Col>
            </Row>
        </div>
  )
}

export default DeleteJobOpening;