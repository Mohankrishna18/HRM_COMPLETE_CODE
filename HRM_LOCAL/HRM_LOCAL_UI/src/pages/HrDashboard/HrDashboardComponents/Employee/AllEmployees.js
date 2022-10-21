import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Tabs, Row, Col, Card } from "react-bootstrap";
import axios from "../../../../Uri";
import ReactTable from "../../../../commonComponents/ReactTable";
import { tableConstants } from "./tableContent";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Graph from "./Graph";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { DataGrid } from '@mui/x-data-grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: '',
  color: theme.palette.text.secondary,
}));

function AllEmployees(props) {
  const [data, setData] = useState([]);
  const [departmentName, setDepartmentName] = useState([]);
  const [getDepartmentName, setGetDepartmentName] = useState([]);
  const [empData, setEmpData] = useState([]);
  const [value, setValue] = React.useState("1");
  const [renderTable, setRenderTable] = useState("");
  const [changingStatus, setChangingStatus] = useState("");
  console.log(departmentName)

  const getData = () => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  console.log(data.length)
  useEffect(() => {
    loadData();
    getData();
    getIT();
    getTaa();
    getHr();
    getTag();
    getPMO();
    getOracle();
    getDigital();

  }, []);

  const loadData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartmentName(res.data);
    console.log(res.data);
  };



  const [taa, setTaa] = useState([]);
  const getTaa = () => {
    axios
      .get("/emp/getEmployeesByDepartment/TAA")
      .then((res) => {
        setTaa(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  const [hr, setHr] = useState([]);
  const getHr = () => {
    axios
      .get("/emp/getEmployeesByDepartment/Human Resource(HR)")
      .then((res) => {
        setHr(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  const [tag, setTag] = useState([]);
  const getTag = () => {
    axios
      .get("/emp/getEmployeesByDepartment/TAG")
      .then((res) => {
        setTag(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  const [pmo, setPmo] = useState([]);
  const getPMO = () => {
    axios
      .get("/emp/getEmployeesByDepartment/PMO")
      .then((res) => {
        setPmo(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  const [oracle, setOracle] = useState([]);
  const getOracle = () => {
    axios
      .get("/emp/getEmployeesByDepartment/Oracle")
      .then((res) => {
        setOracle(res.data.data);
        console.log(res.data.data);
      })
    // .catch((err) => {
    //   console.log(err);
    // toast.error("Server Error")
    // });
  };

  const [digital, setDigital] = useState([]);
  const getDigital = () => {
    axios
      .get("/emp/getEmployeesByDepartment/Digital")
      .then((res) => {
        setDigital(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  const [it, setIt] = useState([]);
  const getIT = () => {
    axios
      .get("/emp/getEmployeesByDepartment/IT")
      .then((res) => {
        setIt(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  };

  // to get employee data by departments
  const getEmpData = () => {
    axios
      .get(`/emp/getEmployeesByDepartment/${getDepartmentName}`)
      .then((res) => {
        setEmpData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
    setRenderTable(changingStatus);

  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const empcount = data.length;
  const female = data ? data.filter((item) => item.gender === "female") : 0
  const male = data ? data.filter((item) => item.gender === "male") : 0


 

  return (
    <><div className="responsive" >
      <Row >
        <Col>
          <div className="responsive" >


            <div >
              <Row>
                <Col >
                  <Grid item style={{ height: "15vh", width: "20vh" }}>
                    <Item>

                      {empcount === 0 ? (<ul>0 All Count </ul>) : (<ul>{empcount} All Count </ul>)}
                      {male === 0 ? (<ul>0 male </ul>) : (<ul>{male} male </ul>)}
                      {female === 0 ? (<ul>0 female </ul>) : (<ul>{female} female</ul>)}

                    </Item>
                  </Grid>
                </Col>
                <Col md="4" style={{ height: "15vh", position: "relative" }}>
                  <Graph />
                </Col>
                <Col md="2" style={{ paddingTop: "3%" }}>
                  <input type="text" class="form-control" placeholder="Employee Name" />
                </Col><Col style={{ paddingTop: "3%" }} >

                  <select class="form-control" placeholder="Select Department"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setChangingStatus(e.target.value);
                    }}>
                    <option value={"ALL"}>All</option>
                    {departmentName.map((departmentName) => (
                      <option value={departmentName.departmentName}>{departmentName.departmentName}</option>
                    ))}
                  </select>
                </Col>

                <Col style={{ paddingTop: "3%" }}>
                  <button type="button" class="btn btn-success" style={{ width: 150 }} onClick={getEmpData} >Search</button>
                </Col>
              </Row>
            </div>

          </div>
        </Col>
      </Row>

      <Row>
        <div className="responsive" style={{ paddingTop: "2%" }}>
          {(() => {
            switch (renderTable) {
              case 'All':
                return <ReactTable cols={tableConstants} data={data} hoverable />
              case 'Human Resource(HR)':
                return <ReactTable cols={tableConstants} data={hr} hoverable />
              case 'TAG':
                return <ReactTable cols={tableConstants} data={tag} hoverable />
              case 'PMO':
                return <ReactTable cols={tableConstants} data={pmo} hoverable />
              case 'Oracle':
                return <ReactTable cols={tableConstants} data={oracle} hoverable />
              case 'Digital':
                return <ReactTable cols={tableConstants} data={digital} hoverable />
              case 'IT':
                return <ReactTable cols={tableConstants} data={it} hoverable />
              default:
                return <ReactTable cols={tableConstants} data={data} hoverable />

            }
          })()}
        </div>
      </Row>

    </div>
    </>
  );
}

export default AllEmployees;