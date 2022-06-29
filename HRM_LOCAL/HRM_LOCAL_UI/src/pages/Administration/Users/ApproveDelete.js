import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from "../../../Uri";

const ApproveDelete = (props) => {
    console.log(props.deleteOnboard)


    const deleteuser = async () => {
        try {
            const res = await axios.delete(`/user/deleteUserById/${props.deleteOnboard.employeeId}`)
            console.log(res)
            if (res.data.status) {
                props.func();
            }
        }
        catch (error) {
            console.log(error)
        }

        // .then((res)=>{
        //     console.log(res)

        //     if (res.data.status) {
        //         props.func();

        //       } else {
        //         console.log("Props not send");
        //       }
        // }).catch((err)=>{
        //     console.log(err)
        //     console.log("Not deleted")
        // })
        props.deleteHandleClose()
    }
    return (
        <div>
            <Row>
                <Col>
                    <Row><Col style={{ paddingLeft:"10px" }}> Are you sure that you want to delete {props.deleteOnboard.userName}?</Col></Row>
                    <Row>
                        <Col><Button onClick={deleteuser}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>


        </div>
    )
}

export default ApproveDelete;
