import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../Constant";

function AditionalDetailsTab(props) {
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);

  
  const viewUploadFile = () => {
    // window.open(`api/get/image/${imageName}/${onboardingId}`)

    axios
      .get(`api/get/imageByTitle/AdditionalDetails/${props.viewOnboard.onboardingId}`, {
        contentType: "application/pdf",
      })
      .then((res) => {
        console.log(res.data.url);
        setImageName(res.data);
        setUrl(res.data.url);
        saveAs(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var tempDate = new Date(props.viewOnboard.passportExpiryDate);
  var ped = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
 
  return (
    <div style={{ paddingLeft: 20, paddingBottom:"48px"}}>
    <Card.Title>
        <Row>
            <Col> <h5>Additional Details :</h5></Col>
            {/* <Col style={{float: "right",paddingLeft:"750px"}}><EditIcon onClick={handleShow}/></Col> */}
        </Row>
    </Card.Title>
    <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                Passport Number:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                {props.viewOnboard.passportNo}
            </Card.Text>
        </Col>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                Passport Expiry Date:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
       
           {props.viewOnboard.passportExpiryDate ? (<Card.Subtitle style={{ padding: 10,color: "#999897" }}>
                {ped} 
            </Card.Subtitle>) : (<div></div>)}

        </Col>
    </Row>
    <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                PAN Card Number:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                {props.viewOnboard.panNumber}
            </Card.Text>
        </Col>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                Aadhar Card Number:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                {props.viewOnboard.aadharNumber}
            </Card.Text>
        </Col>
    </Row>

    <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                UAN Number:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                {props.viewOnboard.uanNumber}
            </Card.Text>
        </Col>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
            Bank Name:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
            {props.viewOnboard.bankName}
            </Card.Text>
        </Col>
    </Row>

    <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
            Account Number:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
            {props.viewOnboard.accountNumber}
            </Card.Text>
        </Col>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
            IFSC Code:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
            {props.viewOnboard.ifscCode}
            </Card.Text>
        </Col>
    </Row>

    <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
            Branch:
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
            {props.viewOnboard.branch}
            </Card.Text>
        </Col>
        <Col>
            <Card.Subtitle style={{ padding: 10 }}>
                
            </Card.Subtitle>{" "}
        </Col>
        <Col md={{ offset: 1 }}>
            <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
               
            </Card.Text>
        </Col>
    </Row>
    <Row>
    <Col md="6" style={{ paddingTop: 0 }}>
              <a
                href={`${BASE_URL}/api/get/imageByTitle/AdditionalDetails/${props.viewOnboard.onboardingId}`}
              >
                Download Documents
              </a>
            </Col>
    </Row>
    

</div>
  );
}
export default AditionalDetailsTab;
