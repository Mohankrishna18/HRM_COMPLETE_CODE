import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from "../../../Uri";

const DeleteCandidate = (props) => {
    console.log(props.deleteOnboard)

    const deleteProjects = async () => {
        try {
            const res = await axios.delete(`/clientProjectMapping/deleteProject/${props.deleteOnboard.projectId}`)
                .then((deletedResponse) => {
                    // const user = deletedResponse.data
                    // console.log(deletedResponse);
                    if (deletedResponse.data.status) {
                        props.func();
                        toast.success("Candidate deleted successfully!!!");
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
                    <Row><Col style={{ paddingLeft: "100px" }}> Are you sure that you want to delete {props.deleteOnboard.project}?</Col></Row>
                    <Row>
                        <Col style={{ paddingLeft: "220px" }}><Button style={{
                            backgroundColor: "#f5896e",
                            borderColor: "#ff9b44",
                        }} onClick={deleteProjects}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteCandidate;



