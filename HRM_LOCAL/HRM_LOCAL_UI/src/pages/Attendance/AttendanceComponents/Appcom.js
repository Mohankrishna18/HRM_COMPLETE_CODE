import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import { Form, Button, Card } from 'react-bootstrap'
import { Box } from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import axios from '../../../Uri'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { bgcolor } from '@mui/system'

const appcom = () => {
  const [selectedYear, setSelectedYear] = useState()
  //const [employeeName, setEmployeeName] = useState()
  const [rowData, setRowData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState()
  const userData = sessionStorage.getItem('userdata')
  const userData1 = JSON.parse(userData)
  //const employeeid = userData1.data.employeeId
  const [open, setOpen] = useState([])
  const [data, setData] = useState([])

  console.log(selectedMonth)
  console.log(selectedYear)
  const [columns, setColumns] = useState([
    {
      title: 'Employee Name',
      field: 'employeeName',
    },
    {
      title: 'WFH',
      field: 'wfh',
      type: 'numeric',
    },
    {
      title: 'Total Days Present',
      field: 'totalDaysPresent',
      type: 'numeric',
    },
    {
      title: 'Total Days Absent',
      field: 'totalDaysAbsent',
      type: 'numeric',
    },
    {
      title: '1',
      field: 'one',
      type: 'numeric',
      render: (rowData) => {
        return rowData.one == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '2',
      field: 'two',
      type: 'numeric',
      render: (rowData) => {
        return rowData.two == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '3',
      field: 'three',
      type: 'numeric',
      render: (rowData) => {
        return rowData.three == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '4',
      field: 'four',
      type: 'numeric',
      render: (rowData) => {
        return rowData.four == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '5',
      field: 'five',
      type: 'numeric',
      render: (rowData) => {
        return rowData.five == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '6',
      field: 'six',
      type: 'numeric',
      render: (rowData) => {
        return rowData.six == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '7',
      field: 'seven',
      type: 'numeric',
      render: (rowData) => {
        return rowData.seven == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '8',
      field: 'eight',
      type: 'numeric',
      render: (rowData) => {
        return rowData.eight == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '9',
      field: 'nine',
      type: 'numeric',
      render: (rowData) => {
        return rowData.nine == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '10',
      field: 'ten',
      type: 'numeric',
      render: (rowData) => {
        return rowData.ten == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '11',
      field: 'eleven',
      type: 'numeric',
      render: (rowData) => {
        return rowData.eleven == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '12',
      field: 'twelve',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twelve == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '13',
      field: 'thirteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.thirteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '14',
      field: 'fourteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.fourteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '15',
      field: 'fifteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.fifteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '16',
      field: 'sixteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.sixteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '17',
      field: 'seventeen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.seventeen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '18',
      field: 'eighteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.eighteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '19',
      field: 'ninteen',
      type: 'numeric',
      render: (rowData) => {
        return rowData.ninteen == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '20',
      field: 'twenty',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twenty == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '21',
      field: 'twentyone',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentyone == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '22',
      field: 'twentytwo',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentytwo == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '23',
      field: 'twentythree',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentythree == 1 ? (
          <DoneOutlineIcon />
        ) : (
          <DangerousIcon />
        )
      },
    },
    {
      title: '24',
      field: 'twentyfour',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentyfour == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '25',
      field: 'twentyfive',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentyfive == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '26',
      field: 'twentysix',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentysix == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '27',
      field: 'twentyseven',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentyseven == 1 ? (
          <DoneOutlineIcon />
        ) : (
          <DangerousIcon />
        )
      },
    },
    {
      title: '28',
      field: 'twentyeight',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentyeight == 1 ? (
          <DoneOutlineIcon />
        ) : (
          <DangerousIcon />
        )
      },
    },
    {
      title: '29',
      field: 'twentynine',
      type: 'numeric',
      render: (rowData) => {
        return rowData.twentynine == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
    {
      title: '30',
      field: 'thirty',
      type: 'numeric',
      render: (rowData) => {
        return rowData.thirty == 1 ? <DoneOutlineIcon /> : <DangerousIcon />
      },
    },
  ])
  // const date="10/20/2022";
  // console.log(date);
  // const day=date.getDate();
  // console.log(day);
  useEffect(() => {
    axios
      .get('/emp/getAllEmployeeMasterData')
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        // toast.error("Server Error")
      })
  }, [])

  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }
  useEffect(() => {
    handleClose()
  }, [])
  const getTableBodyHandler = async () => {
    handleToggle()
    const response = await axios
      .get(
        `/empAttendence/getAllAttendenceByMonthAndYear/${selectedMonth}/${selectedYear}`,
      )
      .catch((error) => {
        handleClose()
        toast.error(' No Records Found')
      })
    console.log(response.data)
    if (response.data.status == true || response.data != null) {
      handleClose()
      setRowData(response.data)
    } else if (response.data.status == false && response.data == null) {
      handleClose()
      console.log('No Records Found')
      toast.warning(' No Records Found')
    }
  }
  
  return (
    <Grid spacing={2}>
      <Grid item xs={12} style={{ height: 49 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={4} style={{paddingLeft:'10rem'}}>
            <Form>
              <Form.Group>
                <Form.Label>
                  <Card
                  
                    style={{
                      width: '15rem',
                      height: '5rem',
                      alignItems: 'center',
                     
                      paddingTop: '1rem',
                      fontSize: '30px',
                      cursor: 'pointer',
                      boxShadow:'5px 2px 2px 2px'
                      // opacity:'0.3',
                      // transform: scale(2)
                      
                    }}
                  >
                    {' '}
                    Total Emp - {data.length > 0 ? data.length : 0}
                  </Card>
                </Form.Label>
              </Form.Group>
            </Form>
          </Grid>
          <Grid item xs={4}>
            <Form>
              <Form.Group>
                <Form.Label>
                  <Card
                  
                    style={{
                      width: '15rem',
                      height: '5rem',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      fontSize: '30px',
                      cursor: 'pointer',
                      boxShadow:'5px 2px 2px 2px'
                      // opacity:'0.3',
                      
                      // transform: scale(2)
                      
                    }}
                  >
                    {' '}
                    Total WFH - {data.length > 0 ? data.length : 0}
                  </Card>
                </Form.Label>
              </Form.Group>
            </Form>
          </Grid>
          <Grid item xs={4}>
            <Form>
              <Form.Group>
                <Form.Label>
                  <Card
                  
                    style={{
                      width: '15rem',
                      height: '5rem',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      fontSize: '30px',
                      cursor: 'pointer',
                      boxShadow:'5px 2px 2px 2px'
                      // opacity:'0.3',
                      // transform: scale(2)
                      
                    }}
                  >
                    {' '}
                    Total Leaves - {data.length > 0 ? data.length : 0}
                  </Card>
                </Form.Label>
              </Form.Group>
            </Form>
          </Grid>
          <Grid item xs={4} style={{paddingLeft:'8rem'}}>
            <Form>
              <Form.Group>
                <Form.Label>Select Year</Form.Label>
                <Form.Select
                  style={{
                    width: '58%',
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
         
          <Grid item xs={3}style={{paddingTop:'3rem',paddingRight:'10rem'}}>
            <Box>
              <Button
                variant="contained"
                disableRipple
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#FF7417',
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
        <Grid>
          <MaterialTable
            columns={columns}
            title="Monthly Summary"
            data={rowData}
            style={{ color: 'black', fontSize: '13px' }}
            editable={{}}
            options={{
              paging: false,
              addRowPosition: 'first',
              actionsColumnIndex: -1,

              headerStyle: {
                backgroundColor: '#29AB87',
                paddingTop: '5px',

                paddingBottom: '2px',

                color: 'white',
              },
              exportButton: true,
            }}
          />
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Grid>
  )
}

export default appcom;
