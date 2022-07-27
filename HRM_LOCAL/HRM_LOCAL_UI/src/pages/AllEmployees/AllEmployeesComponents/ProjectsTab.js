import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function ProjectsTab() {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

    const [eighteenerror, setEighteenerror] = useState("");
    const [nineteenerror, setNineteenerror] = useState("");
    const [twentyerror, setTwentyerror] = useState("");
    const [twentyoneerror, setTwentyoneerror] = useState("");
    const [twentytwoerror, setTwentytwoerror] = useState("");
    const [twentythreerror, setTwentythreerror] = useState("");
    const [twentyfourerror, setTwentyfourerror] = useState("");

    const [projectName, setProjectName] = useState("");

    useEffect(() => {
        axios
            .get(`/emp/getEmploymentDetails/${employeeid}`)
            .then((response) => {
                setProjectName(response.data.data.projectName);
               
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updateEmploymentDetails/${employeeid}`, {
            projectName
        });
        toast.success("Form Submitted Successfully");
};

    return (

        <div>
            {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Projects Details
                </Card.Title>
            </Card> */}

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                        disabled
                            type="text"
                            placeholder="Project Name"
                            controlId="projectName"
                            value={projectName}
                            maxLength={25}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentytwoerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control
                        disabled
                            type="text"
                            placeholder="Client Name"
                            controlId="projectName"
                            value={projectName}
                            maxLength={25}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentytwoerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Reporting Manager</Form.Label>
                        <Form.Control
                        disabled
                            type="text"
                            placeholder="Reporting Manager"
                            controlId="projectName"
                            value={projectName}
                            maxLength={25}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentytwoerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Skills</Form.Label>
                        <Form.Control
                        disabled
                            type="text"
                            placeholder="Skills"
                            controlId="projectName"
                            value={projectName}
                            maxLength={25}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {twentytwoerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                </Row>
                <Button
                    className="rounded-pill" md="3"
                    style={{ backgroundColor: "#eb4509", float: "right" }}
                    type="submit"
                    size="lg"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default ProjectsTab;