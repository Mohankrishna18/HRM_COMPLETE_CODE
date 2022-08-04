import React from 'react';
import { Col, Row, Card, Container, Tabs, Tab } from "react-bootstrap";
import HrEmployeesLeavesWaitingForApproval from '../../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval';
import PMOApproval from '../../PMO/PMOApproval';
import PMOMain from '../../PMO/PMOMain';
import TaskMain from '../../TimeSheet/EmployeeTimesheet/TaskMain';


const Approve = () => {
    return (
        <div style={{ paddingTop: "20px" }}>
            <Row>
                <Col xs={12}>
                    <Tabs
                        defaultActiveKey="Onboarding Approvals"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        style={{ justifyContent: "center", color: "white", backgroundColor: "white", fontSize: "19px", padding: 0, }}
                        >
                        <Tab eventKey="Onboarding Approvals" title="Onboarding Approvals" style={{ backgroundColor: "white" }}>
                            
                            <PMOApproval/>
                        </Tab>
                        <Tab eventKey="Leave Approvals" title="Leave Approvals" style={{ backgroundColor: "white" }}>
                            <HrEmployeesLeavesWaitingForApproval/>
                        </Tab>
                        <Tab eventKey="Timesheet Approvals" title="Timesheet Approvals" style={{ backgroundColor: "white" }} >
                            <TaskMain/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}



export default Approve;
