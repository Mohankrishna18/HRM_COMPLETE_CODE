import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsWindowSidebar } from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from "../../../Uri";

const DeleteUserstory = (props) => {
    console.log(props.deleteOnboard)
    console.log(props.deleteOnboard.storyId);

    const deleteProjects =  () => {
        axios.delete(`/userStory/deleteUserStory/${props.deleteOnboard.storyId}`).then((res)=>{
            console.log(res)
            if(res.data.status){
                props.func()
            }
            else{
                console.log("Props not send");
            }
        })
        .catch((err)=>{
            console.log(err)
        })
       
        props.deleteHandleClose()
    }
    return (
        <div>
            <Row>
                <Col>
                    <Row><Col style={{ paddingLeft:"10px" }}> Are you sure that you want to delete {props.deleteOnboard.project}?</Col></Row>
                    <Row>
                        <Col><Button onClick={deleteProjects}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteUserstory;