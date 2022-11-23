import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Modal from "react-bootstrap/Modal";
import axios from '../../../Uri';

const DeleteRR=(props)=> {
    const Delete = () => {
        props.deleteHandleClose();
    }
    const deleteRR = async () => {
      try {
          const res = await axios.delete(`/recruitmentTracker/deleteRR/${props.deleteOnboard.rrfId}`)
              .then((deletedResponse) => {
                  if (deletedResponse.data) {
                      props.func();
                      toast.success("Requisition Request deleted successfully!!!");
                  }
                  else {
                      console.log("Props not Send")
                  }

        }).catch((err)=>{
            console.log(err)
        })
        props.deleteHandleClose()

    //     try {
    //         const res = await axios.delete(`/recruitmentTracker/deleteRR/${props.deleteOnboard.rrfId}`)
    //             .then((deletedResponse) => {
    //                 // const user = deletedResponse.data
    //                 // console.log(deletedResponse);
    //                 if (deletedResponse.data) {
    //                     props.func();
    //                     toast.success("Requisition Request deleted successfully!!!");
    //                 }
    //                 else {
    //                     console.log("Props not Send");
    //                 }

    //                 // console.log(user);
    //             })
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     props.deleteHandleClose()
    }

    return (
        <div>
            <Row>
                <Col>
                    <Row>
                        <Modal.Body>
                            <Col style={{ paddingLeft: "10px", border: 0, fontSize: "20px" }}> Are you sure you want to delete requisition request {props.deleteOnboard.jobTitle}?
                            </Col>
                        </Modal.Body>
                    </Row>
                    <Row>
                        <Modal.Footer style={{ borderTop: "none" }}>
                            <Col style={{
                                textAlign: "right", marginLeft: "300px"
                            }}>
                                <Button style={{
                                    backgroundColor: "#f5896e",
                                    borderColor: "#f5896e",
                                }} onClick={deleteRR}>Yes</Button>

                            </Col>
                            <Col>
                                <Button style={{
                                    backgroundColor: "#ff9b44",
                                    borderColor: "#ff9b44",
                                }} onClick={Delete}>No</Button>

                            </Col>
                        </Modal.Footer>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteRR;