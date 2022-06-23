import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import axios from "../../../Uri";

const ApproveDelete = (props) => {
    console.log(props.deleteOnboard)
   
    
    const deleteuser=async()=>{
        try{
            const res =await axios.delete(`/user/deleteUserById/${props.deleteOnboard.employeeId}`)
            console.log(res)
            if(res.data.status){
                props.func();
            }
        }
        catch(error){
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
        props.handleClosed()
    }
  return (
    <div>
        <Row>
            <Row> Are You Sure You want to delete {props.deleteOnboard.employeeId}</Row>
            <Row>
                <Col><Button onClick={deleteuser}>Yes</Button></Col>
            </Row>

        </Row>
       
        
        
    </div>
  )
}

export default ApproveDelete;
