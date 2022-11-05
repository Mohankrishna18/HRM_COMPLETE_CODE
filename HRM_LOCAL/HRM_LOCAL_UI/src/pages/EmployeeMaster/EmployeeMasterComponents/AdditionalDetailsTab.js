import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import Url from "../../../Uri";
import { BASE_URL } from "../../../Constant";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";

function AditionalDetailsTab() {

    const params=useParams();
    console.log(params.id);

  console.log(Url.baseURL);
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  const onboardingId = userData1.data.onboardingId;
  console.log(onboardingId)

  const [eighteenerror, setEighteenerror] = useState("");
  const [nineteenerror, setNineteenerror] = useState("");
  const [twentyerror, setTwentyerror] = useState("");
  const [twentyoneerror, setTwentyoneerror] = useState("");
  const [twentytwoerror, setTwentytwoerror] = useState("");
  const [twentythreerror, setTwentythreerror] = useState("");
  const [twentyfourerror, setTwentyfourerror] = useState("");
  const [ferrors, setFErrors] = useState("");
  const [serror, setSerror] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const [fourerror, setFourerror] = useState("");
  const [fiveerrors, setFiveErrors] = useState("");

  const [url, setUrl] = useState("");
  // console.log(url.url);

  const [passportExpiryDate, setPassportExpiryDate] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [uanNumber, setUanNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branch, setBranch] = useState("");
  const [band, setBand] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [file, setFile] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    axios
      .get(`/emp/getEmployeeDataByOnboardingId/${params.id}`)
      .then((response) => {
        setPanNumber(response.data.data.panNumber);
        setAadharNumber(response.data.data.aadharNumber);
        setUanNumber(response.data.data.uanNumber);
        setBankName(response.data.data.bankName);
        setAccountNumber(response.data.data.accountNumber);
        setIfscCode(response.data.data.ifscCode);
        setBranch(response.data.data.branch);
        setBand(response.data.data.band);
        setPassportExpiryDate(response.data.data.passportExpiryDate);
        setPassportNo(response.data.data.passportNo);
      });
  }, []);

  const [documents, setDocuments] = useState("");
  const loadData = () => {
    axios
      .get(`${BASE_URL}/api/get/imageByTitle/AdditionalDetails/${params.id}`)
      .then((response) => {
        setDocuments(response);
        console.log(response);
      });

  }
  useEffect(() => {
    loadData();

  }, []);

  console.log(documents);

  const changeHandler = async (e) => {
    e.preventDefault();
    await axios.put(
      `/emp/updateAdditionalDetailsInPreOnboarding/${params.id}`,
      {
        passportExpiryDate,
        passportNo,
        panNumber,
        aadharNumber,
        uanNumber,
        bankName,
        accountNumber,
        ifscCode,
        branch,
        band,
        passportNo,
        passportExpiryDate,
      }
    );
    toast.success("Form Submitted Successfully");
    const url = `/api/post/image/${params.id}/AdditionalDetails?image`;
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(formData);
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setImageName(response.data.imageName);
        setUrl(response.data.url);
        loadData();
      })
      .catch((error) => {
        console.log("File is Not Upload");
        console.log(error);
      });
  };
  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const viewUploadFile = () => {
    // window.open(`api/get/image/${imageName}/${onboardingId}`)
    axios
      .get(`/api/get/imageByTitle/AdditionalDetails/${params.id}`, {
        contentType: "application/pdf",
      })
      .then((res) => {
        console.log(res.data.url);
        console.log(res);
        setImageName(res.data);
        setUrl(res.data.url);
        saveAs(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const downloadFile=()=>{
  //   saveAs
  // }
  // function downloadFile(){

  // }

  return (
    <div>
      {/* <Card
        style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 0,
          backgroundColor: "#FAFDD0",
        }}
      >
         <Card.Title style={{ margin: 20, textAlign: "center" }}>
          Additional Details
        </Card.Title>
      </Card> */}

      <Form onSubmit={(e) => changeHandler(e)} style={{ padding: 10 }}>
        <Row className="mb-5">
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Passport Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Passport Number"
              controlId="passportNo"
              value={passportNo}
              maxLength={15}
              name="passportNo"
              onChange={(e) => setPassportNo(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Passport Expiry Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Passport Expiry Date"
              controlId="passportExpiryDate"
              name="passportExpiryDate"
              value={passportExpiryDate}
              min={new Date()}
              onChange={(e) => setPassportExpiryDate(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>PAN Card Number *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="PAN Card Number"
              controlId="panNumber"
              name="panNumber"
              maxLength={50}
              isInvalid={ferrors}
              value={panNumber}
              onChange={(event) => {
                setPanNumber(event.target.value.toUpperCase())
                if (event.target.value.toUpperCase().length > 10 || event.target.value.toUpperCase().length < 10) {
                  setFErrors("PAN Number should not be more than 10 ")
                }
                else {
                  setFErrors("");
                }
              }
              }

            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {ferrors}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Aadhar Card Number *</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Aadhar Card Number"
              controlId="aadharNumber"
              name="panNumber"
              maxLength={12}
              isInvalid={nineteenerror}
              value={aadharNumber}
              onChange={(event) => {
                setAadharNumber(event.target.value);
                if (event.target.value.length > 12 || event.target.value.length < 12) {
                  setNineteenerror(
                    " Aadharcard Number length should be 12 characters"
                  );
                } else {
                  setNineteenerror("");
                }
                if(panNumber === ""){
                  setFErrors("PAN Card Number is required")
                }
                else{
                  setFErrors("")
                }
              }}
            />
            <Form.Control.Feedback type="invalid">
              {nineteenerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>UAN Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="UAN Number"
              controlId="uanNumber"
              name="uanNumber"
              value={uanNumber}
              maxLength={12}
              onChange={(event) => setUanNumber(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Bank Name </Form.Label>
            <Form.Control
           
              type="text"
              placeholder="Bank Name"
              controlId="bankName"
              name="bankName"
              maxLength={50}
              value={bankName}
              isInvalid={twentyerror}
              onChange={(event) => {
                setBankName(event.target.value);
                if (!event.target.value.match(/^[a-zA-Z ]+$/)) {
                  setTwentyerror(" Enter valid Bank Name");
                }
                else {
                  setTwentyerror("")
                }
                if (aadharNumber === "") {
                  setNineteenerror(" Aadhar Card Number is Required");
                } else {
                  setNineteenerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentyerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Bank Account Number </Form.Label>
            <Form.Control

              type="number"
              placeholder="Account Number"
              controlId="accountNumber"
              name="accountNumber"
              maxLength={50}
              value={accountNumber}
              isInvalid={twentyoneerror}
              onChange={(event) => {
                setAccountNumber(event.target.value);
                if (event.target.value.length > 16 || event.target.value.length < 16) {
                  setTwentyoneerror(" Bank account should be 16 characters");
                }
                else {
                  setTwentyoneerror("");
                }
              
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentyoneerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>IFSC Code </Form.Label>
            <Form.Control
          
              type="text"
              placeholder="IFSC Code"
              controlId="ifscCode"
              name="ifscCode"
              maxLength={50}
              value={ifscCode}
              isInvalid={twentytwoerror}
              onChange={(event) => {
                setIfscCode(event.target.value);
                
                if (event.target.value.length > 11 || event.target.value.length < 11) {
                  setTwentytwoerror("Length should be 11 characters")
                }
                else {
                  setTwentytwoerror("");
                }
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentytwoerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Branch Name </Form.Label>
            <Form.Control
       
              type="text"
              placeholder="Branch Name"
              controlId="branchName"
              name="branch"
              maxLength={50}
              value={branch}
              isInvalid={twentythreerror}
              onChange={(event) => {
                setBranch(event.target.value);
                if (!event.target.value.match(/^[a-zA-Z]+$/)) {
                  setTwentythreerror("Enter Valid Branch name");
                }
                else {
                  setTwentythreerror("");
                }
               
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {twentythreerror}
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>
                  <p class="fw-bold">
                    Please Upload Your Documents (Aadhar Card, Pan Card, Bank
                    Document in PDF format only)
                  </p>
                </Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Form.Group>

            {/* <input type='url' value={url} onChange={(event)=>setUrl(event.target.value)} />
          <Button onClick={viewUploadFile}>Download File</Button> */}


            {documents.statusText === "OK" ? (<Col>
              <a href={`${BASE_URL}/api/get/imageByTitle/AdditionalDetails/${onboardingId}`}>
                Additional Documents

              </a>
            </Col>) : (<></>)

            }

          </Row>
          <Row>
            <Col>
              <Button
                className="rounded-pill"
                md="3"
                style={{ backgroundColor: "#f5896e",
                borderColor: "#f5896e", float: "right" }}
                type="submit"
                size="lg"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Row>


      </Form>
    </div>
  );
}
export default AditionalDetailsTab;

{/* ( documents === "") ? (<> </>):(<a href={`${BASE_URL}/api/get/imageByTitle/AdditionalDetails/${onboardingId}`}> 
                Additional Documents 
                
              </a>) */}


