import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "../../../Uri";
import "date-fns";
import Grid from "@material-ui/core/Grid";

import moment from "moment";
//import "react-week-picker/src/lib/calendar.css";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Tabs,
  Tab,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FcWebcam } from "react-icons/fc";

const TimesheetHistory = () => {
  const handleJumpToCurrentWeek = (currenDate) => {
    console.log(`current date: ${currenDate}`);
  };

  const handleWeekPick = (startDate, endDate) => {
    console.log(`${startDate} to ${endDate}`);
  };
  useEffect(() => {
    getTaskDetails();
  }, []);
  const getTaskDetails = async (e) => {
    const response = await axios.get(`timesheet/gettaskDetails/${employeeId}`);
    setTaskData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getEmployeeDataApproval();
  }, []);
  const getEmployeeDataApproval = async (e) => {
    const response = await axios.get(
      `timesheet/gettimesheetData/${employeeId}`
    );
    setApproval(response.data);
    console.log(response.data);
  };
  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const employeeId = da.data.employeeId;
  const [approval, setApproval] = useState();
  const [viewShow, setViewShow] = useState(false);
  const viewHandleClose = () => setViewShow(false);
  const [taskData, setTaskData] = useState([]);
  const [columns1, setColumns1] = useState([
    {
      title: "Timesheet Date",
      field: "timeSheetDate",
      type: "date",
      editable: "never",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "Total Hours",
      field: "totalHours",
      type: "text",
      editable: "never",
    },
  ]);
  const [selectedDate, setSelectedDate] =useState (new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div>
      <div>
      <Grid item xs={4}>
            <Form>
              <Form.Group>
                <Form.Label>Select Year</Form.Label>
                <Form.Select
                  style={{
                    width: '48%',
                    height: '8%',
                    padding: '9px',
                    marginLeft: '10px',
                    cursor: 'pointer',
                    borderRadius: 10,
                  }}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option>Select</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Grid>

          <Grid item xs={4}>
            <Form>
              <Form.Group>
                <Form.Label>Select Month</Form.Label>
                <Form.Select
                  style={{
                    width: '48%',
                    height: '8%',
                    padding: '9px',
                    marginLeft: '10px',
                    cursor: 'pointer',
                    borderRadius: 10,
                  }}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option>Select</option>
                  <option value="01">January</option>
                  <option value="02">February </option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">Augest</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Grid>


        {/* <Calender/> */}

        {/* <WeeklyCalendar
          onWeekPick={handleWeekPick}
          jumpToCurrentWeekRequired={true}
          onJumpToCurrentWeek={handleJumpToCurrentWeek}
        /> */}
      </div>

      <Row styles={{ paddingTop: "20%" }}>
        <MaterialTable
          title=""
          columns={columns1}
          data={approval}
          options={{
            headerStyle: {
              backgroundColor: "#FF9E14",
              color: "white",
              fontSize: "16px",
              paddingTop: "5px",
              paddingBottom: "2px",
            },

            pageSize: 7,
            pageSizeOptions: [7],
            // maxBodyHeight: 450,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            //grouping: true,
            exportButton: true,
          }}
          onSelectionChange={(rows) => {
            rows.map((items) => {
              console.log(items.actualHours);
              console.log(items);

              setOutput([{ ...objectData, ...items }]);
              ot.push({ ...objectData, ...items });
              console.log(output);
              rows.push(objectData);
              console.log(rows);
              time.push(parseInt(items.actualHours));
            });
            setOtt(ot);
            let s = 0;
            time.forEach(myFunction);

            function myFunction(item) {
              s += item;
            }
            console.log(s);
            setTotalHours(s);

            console.log(time);
          }}
          actions={[
            {
              icon: "button",

              tooltip: "Save User",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.firstName),
            },
          ]}
          components={{
            Action: (props) => (
              <div>
                <Button
                  variant="white "
                  className="rounded-pill"
                  onClick={(event) => {
                    setViewShow(true);

                    // console.log(props);
                    // setViewOnboard(props.data);
                  }}
                >
                  {" "}
                  <FcWebcam /> View
                </Button>
              </div>
            ),
          }}
        />
        <Modal show={viewShow} onHide={viewHandleClose} size="xl">
          <Modal.Header style={{ backgroundColor: "#FF9E14" }}>
            <Modal.Title>Timesheet Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Estimated Hours</th>
                  <th>Actual Hours</th>
                  <th>Remaining Hours</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {taskData.map((item) => (
                  <tr>
                    <td>{item.taskTitle}</td>
                    <td>{item.estimatedHours}</td>
                    <td>{item.actualHours}</td>
                    <td>{item.remainingHours}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </Row>
    </div>
  );
};

export default TimesheetHistory;
