import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BUHRequisitionView = (props) => {
  console.log(props.data);
  console.log(props.data.jobTitle);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(true);

  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {
      jobId,
      jobTitle,
      positions,
      status,
      primarySkills,
      secondarySkills,
      workLocation,
      workTimings,
      rate,
      employmentType,
      project,
      client,
      businessUnit,
      yearsOfExperience,
      description,
      raisedBy,
      raisedOn,
    } = form;

    const newErrors = {};
    if (
      !jobId ||
      jobId === "" ||
      !jobId.match(
        /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.jobId = "Please Enter company PhoneNumber";
    if (!jobTitle || jobTitle === "" || !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please Select Client";
    if (
      !primarySkills ||
      primarySkills === "" ||
      !primarySkills.match(/^[aA-zZ\s]+$/)
    )
      newErrors.primarySkills = "";
    if (
      !positions ||
      positions === "" ||
      positions.match(
        /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.positions = "";
    if (
      !secondarySkills ||
      secondarySkills === "" ||
      !secondarySkills.match(/^[aA-zZ\s]+$/)
    )
      if (!workLocation || workLocation === "")
        newErrors.workLocation = "Please Select startDate";

    if (!raisedOn || raisedOn === "")
      newErrors.raisedOn = "Please Select End Date";
    if (!rate || rate === "" || rate.match(/[^0-9]/g))
      newErrors.rate = "Please Enter rate";
    if (!status || status === "") newErrors.status = "Please select status";
    if (!priority || priority === "")
      newErrors.priority = "Please Select priority";

    if (!yearsOfExperience || yearsOfExperience === "")
      newErrors.yearsOfExperience = "";
    if (!description || description === "")
      newErrors.description = "Please Enter Description";
    return newErrors;
  };
  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const userType = da.data.userType;

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Approved");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let employeeId = props.data.employeeId;

    console.log(employeeId);
    const obj = { status: "BUHeadApproved" };
    const form1 = Object.assign(form, obj);
    axios
      .put(
        `/recruitmentTracker/modifyRequisitionStatus/${employeeId}/${userType}`,
        form1
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          props.func();
        } else {
          console.log("props not send");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      });
    props.handleClose();

    notify();
  };

  return (
    <div className="scroll">
      <Row style={{ marginTop: 20 }}>
                <Col>
                    <Card style={{ padding: 30, paddingBottom: 20 }}>

                    <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Employee ID   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                {/* {props.data.rrfId} */}
                                </Card.Text>
                            </Col>
                        </Row><Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Employee Name   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {/* {props.data.departmentName} */}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
    </div>
  );
};

export default BUHRequisitionView;

export const UserContext = createContext(null);
const {data } = useContext(UserContext)
  console.log(props.rowData.data.projectName)
  const [teamData1, setTeamData] = useState([]);
 // const rowData = props.rowData;
  useEffect(() => {
    loadTeamData();
  }, [props.data]);
const params = useParams()
console.log(params)
  const loadTeamData = async (e) => {
    const response = await axios.get(`clientProjectMapping/getAllProjectTeams/Active/${params.id}`);
    setTeamData(response.data.data);
    console.log(response.data.data);
  };
