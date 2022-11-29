import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { Box } from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import axios from '../../../Uri'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { bgcolor, display } from '@mui/system'
import Moment from 'moment'

const EmployeeAttendance = () => {


  const [year, setYear] = useState("Select Year")
  const [months, setMonths] = useState("Select Month")
  //const [employeeName, setEmployeeName] = useState()
  const [rowData, setRowData] = useState([])
  const [value, setValue] = useState();
  const [month, setMonth] = useState();
  // const [holiday, setHoliday] = useState();
  const [dept, setSelectedBUH] = useState(null);
  const userData = sessionStorage.getItem('userdata')
  const userData1 = JSON.parse(userData)
  const [days, setDays] = useState(0)
  const [workingdays, setWorkingDays] = useState(0)
  const [holidays, setHolidays] = useState(0)
  // const tableTitle ="Monthly Summary"+"-"+ {month}+"-" + {year}+"-" + "No.of Days:"+"31";
  //const employeeid = userData1.data.employeeId
  const [open, setOpen] = useState([])
  const [data, setData] = useState([])
  // const [holiday, setHoliday] = useState([])

  const [loading, setLoading] = React.useState(true);
  const [path, setPath] = useState("Select");
  const closeLoading = () => setLoading(!loading);

  console.log(month)
  console.log(year)
  const [columns, setColumns] = useState([
    {
      title: 'Employee ID',
      field: 'employeeId',
    },
    {
      title: 'Name',
      field: 'employeeName',
    },
    {
      title: 'No.of Days Present',
      field: 'totalDaysPresent',
      type: 'numeric',
      align: 'center'
    },
    {
      title: 'No.of Days Absent',
      field: 'totalDaysAbsent',
      type: 'numeric',
      align: 'center'
    },
    {
      title: 'No.of WFH',
      field: 'wfhCount',
      type: 'numeric',
      align: 'center'
    },
  ])

  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleToggle = () => {
  //   setOpen(!open)
  // }

  const getTableBodyHandler = () => {

    // display()
    console.log(dept);
    //handleToggle()

    if (dept == null || dept === 'all') {
      setLoading(false)
      axios.get(`/emp/getEmployeeLeavesDatawithoutDept/${month}/${year}`).then((response) => {
        console.log(response);

        setRowData(response.data)
        setDays(response.data[0].totalDays)
        setWorkingDays(response.data[0].totalWorkingDays)
        setHolidays(response.data[0].holidays)
        //setLoading(false)
        setLoading(true)
        console.log(month)
        setMonths(months)
        setYear(year)
        setSelectedBUH(path);

      })
        .catch((err) => {
          console.log(err)
        })

    } else {
      setLoading(false)
      axios
        .get(
          `/emp/getEmployeeLeavesData/${month}/${year}/${dept}`,
        ).then((response) => {
          console.log(response)
          setRowData(response.data)
          setDays(response.data[0].totalDays)
          setWorkingDays(response.data[0].totalWorkingDays)
          setHolidays(response.data[0].holidays)
          setLoading(true)
          setMonths(months)
          setYear(year)
          setSelectedBUH(path);
        }).catch((err) => {
          console.log(err)
        })



    }
  }
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((response) => {
      setDepartments(response.data);
    });
    console.log(departments)
    // .catch(() => {
    //   toast.error("Data is not getting");
    // });
    // console.log(departments)
  }, []);

  var now = new Date();
  const date = Moment(now).format('LL')
  // var mth = new Date( now.getMonth()+1, 0);
  // console.log(mth);
  // var dtmth = Moment(mth).format('LL')
  // console.log(dtmth);
  const current = new Date();
  var currentdate = `${current.getMonth() + 1}`;
  console.log(currentdate);
  var currentmonth = current.toLocaleString('default', { month: 'long' });
  console.log(currentmonth);
  var currentyear = `${current.getFullYear()}`;
  console.log(currentyear);
  console.log(date)
  var NoofDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  console.log(NoofDays);
  //   let datee = new Date(year, month, 1);
  // let days = [];
  // // while (datee.getMonth() === month) {
  //   days.push(new Date(datee).toLocaleDateString('en-US', { weekday: 'short' }));
  //   datee.setDate(datee.getDate() + 1); 
  // // }
  // console.log(days);
  return (
    // <div>
    // {loading ? ( 
    <diV>
      {loading ? (
        <><Grid spacing={2}>
          {/* <Grid item xs={12} style={{ height: 60 }}> */}
          <Grid container spacing={2} direction="row">

            <Grid item xs={3} >
              <Form>
                <Form.Group>

                  <Form.Select
                    style={{
                      width: '58%',
                      height: '8%',
                      padding: '9px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                      borderRadius: 10,
                    }}
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                  // value="2022"
                  >
                    <option>{year}</option>
                    {/* <option>{currentyear}</option> */}
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Grid>

            <Grid item xs={3}>
              <Form>
                <Form.Group>
                  <Form.Select
                    style={{
                      width: '48%',
                      height: '8%',
                      padding: '9px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                      borderRadius: 10,
                    }}
                    value={months}
                    onChange={(e) => {
                      var index = e.nativeEvent.target.selectedIndex;
                      setMonths(e.nativeEvent.target[index].text)
                      setMonth(e.target.value)
                    }
                    }

                  // value="10"
                  >
                    <option>{months}</option>
                    {/* <option>{currentmonth}</option> */}
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </Form.Select>

                </Form.Group>
              </Form>
            </Grid>
            <Grid item xs={4}>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Business Unit</Form.Label> */}
                  <Form.Select
                    style={{
                      width: '48%',
                      height: '8%',
                      padding: '9px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                      borderRadius: 10,
                    }}
                    onChange={(e) => {
                      console.log(e.target.value)
                      var index = e.nativeEvent.target.selectedIndex;
                      setPath(e.nativeEvent.target[index].text);
                      setSelectedBUH(e.target.value);
                    }}
                  >
                    <option value="">{path}</option>
                    <option value="select">
                      Select
                    </option>
                    {departments.map((departmentss) => (
                      <option value={departmentss.departmentName}>
                        {departmentss.departmentName}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Form>
            </Grid>
            <Grid item xs={2} >
              <Box>
                <Button
                  variant="success"
                  disableRipple
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 12,
                    color: 'white',
                  }}
                  onClick={getTableBodyHandler}
                >
                  Search
                </Button>
                <ToastContainer
                  position="top-right"
                  min-width="2%"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </Box>
            </Grid>
          </Grid>

          <br />
          {/* <Grid><h6>{tableTitle}</h6></Grid> */}

          <Grid>
            <MaterialTable
              columns={columns}
              title={"Monthly Summary - " + " " + "Days:" + days + " - " + "Working Days:" + workingdays + " - " + "Holidays:" + holidays}
              data={rowData}
              style={{ color: 'black', fontSize: '12px' }}
              editable={{}}
              options={{
                paging: false,
                addRowPosition: 'first',
                actionsColumnIndex: -1,
                pageSize: 10,
                pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],
                maxBodyHeight: 570,
                height: 500,
                // headerStyle: {
                //   backgroundColor: '#29AB87',
                //   paddingTop: '5px',

                //   paddingBottom: '2px',

                //   color: 'white',
                // },
                headerStyle: {
                  // backgroundColor: "#FFC47A",
                  background: "#f5896e",
                  fontSize: "13px",
                  paddingBottom: "4px",
                  paddingTop: "8px",
                  color: "white",

                },
                exportButton: true,
              }}
            />
          </Grid>
          {/* </Grid> */}
          {/* <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
        </Grid></>
      ) : (<> <Backdrop
        sx={{
          color: "#fff",

          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open
        onClick={closeLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop></>)}
    </diV>


    //   ) : (
    //    
    // )}

    // </div>
  );
}

export default EmployeeAttendance
