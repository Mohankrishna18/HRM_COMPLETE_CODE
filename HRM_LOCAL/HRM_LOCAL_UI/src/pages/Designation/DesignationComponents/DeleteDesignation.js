import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from "../../../Uri";

const DeleteDesignation = (props) => {
    console.log(props.deleteOnboard)

    const deleteDesignations = async () => {
        try {
            const res = await axios.delete(`/designation/deleteDesignation/${props.deleteOnboard.designationId}`)
            .then((deletedResponse)=>{
                // const user = deletedResponse.data
                // console.log(deletedResponse);
                if (deletedResponse.data) {
                    props.func();
                    toast.success("Designation deleted successfully!!!");
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
                    <Row><Col style={{ paddingLeft:"10px" }}> Are you sure that you want to delete {props.deleteOnboard.project}?</Col></Row>
                    <Row>
                        <Col><Button onClick={deleteDesignations}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteDesignation;