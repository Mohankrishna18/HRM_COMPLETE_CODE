import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from "../../../Uri";

// To Delete Client
const DeleteClient = (props) => {
    console.log(props.deleteOnboard)

    const deleteClients = async () => {
        try {
            const res = await axios.delete(`/clientProjectMapping/deleteClient/${props.deleteOnboard.clientId}`)
            .then((deletedResponse)=>{
                // const user = deletedResponse.data
                // console.log(deletedResponse);
                if (deletedResponse.data) {
                    props.func();
                    toast.success("Client deleted successfully!!!");
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
                    <Row><Col style={{ paddingLeft:"10px" }}> Are you sure you want to delete {props.deleteOnboard.project}?</Col></Row>
                    <Row>
                        <Col><Button onClick={deleteClients}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteClient;