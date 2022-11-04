import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from "../../../Uri";

const DeleteDepartment = (props) => {
    console.log(props.deleteOnboard)

    const deleteuser = async () => {
        try {
            const res = await axios.delete(`/dept/deleteDepartment/${props.deleteOnboard.departmentId}`)
            .then((deletedResponse)=>{
                const user = deletedResponse.data
                console.log(deletedResponse);
                if (true) {
                    props.func();
                  }
                  else {
                    console.log("Props not Send")
                  }
                  toast.success("Business Unit deleted successfully!!!");
                  // 
            })
            // console.log(res)
            // if (res.data.status) {
            //     props.func();
            // }
            // else{
            //     console.log("Props Not Send");
            //   }
            //   toast.success("User deleted successfully!!!");
             
            //   setTimeout(5000);
            //   handleClose();
            //   toast.error("Something Went Wrong");
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
                    <Row><Col style={{ paddingLeft:"10px" }}> Are you sure that you want to delete {props.deleteOnboard.departmentName}?</Col></Row>
                    <Row>
                        <Col><Button style ={{backgroundColor: "#f5896e",borderColor: "#ff9b44"}} onClick={deleteuser}>Yes</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteDepartment;

