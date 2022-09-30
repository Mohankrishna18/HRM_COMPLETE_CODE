import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";
import axios from '../../../Uri';
import columns from "./utils/PMODashboardColumns.json";
import columns1 from "./utils/PMDashboardColumns.json";
import columns2 from "./utils/BUHDashboardColumns.json";
import columns3 from "./utils/EmployeeDashboardColumns.json";

const ProjectsTable = () => {
    const [data, setData] = useState([]);

    const sessionData = JSON.parse(sessionStorage.getItem('userdata'));
    const employeeId = sessionData.data.employeeId;
    const userType = sessionData.data.userType;
    console.log(employeeId);
    console.log(userType);

    if (userType === "employee") {
        useEffect(() => {
            loadActiveProjectListByEMPID();

        }, []);
        const loadActiveProjectListByEMPID = async (e) => {

            const response = await axios.get(`/clientProjectMapping/getActiveProjectsByEmpIdForEmployee/Active/${employeeId}`);

            setData(response.data.data);
            console.log(response.data.data);

        };
    }

    else {
        useEffect(() => {
            loadActiveProjectListByUserType();

        }, []);
        const loadActiveProjectListByUserType = async (e) => {
            const response = await axios.get(`/clientProjectMapping/getProjectsByUser/${userType}/${employeeId}`);
            setData(response.data.body.data);
            console.log(response.data.body.data);

        };
    }

    return (
        // <Card style={{ paddingTop: "0px" }}>
        <div responsive style={{ paddingTop: "20px" }}>
            {(userType === "pmohead" || userType === "ceo") ?
                <MaterialTable
                    title="Active Project List"
                    columns={columns}
                    style={{ color: "black", fontSize: "13px" }}
                    data={data ? data : []}
                    editable={{

                    }}
                    options={{
                        headerStyle: {

                            backgroundColor: "#FF9E14",
  
                            color: "white",
  
                            fontSize: "16px",
  
                            paddingTop:"5px",
  
                            paddingBottom:"2px",
  
                           
  
                          },
  
                          pageSize: 10,
  
                          pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],
  
                          maxBodyHeight: 500,
  
                          addRowPosition: "first",
  
                          actionsColumnIndex: -1,
  
                          //grouping: true,
  
                          exportButton: true,
                    }}


                />
                :(userType === "irm")?
                <MaterialTable
                    title="Active Project List"
                    columns={columns1}
                    style={{ color: "black", fontSize: "13px" }}
                    data={data ? data : []}
                    editable={{

                    }}
                    options={{
                        headerStyle: {

                          backgroundColor: "#FF9E14",

                          color: "white",

                          fontSize: "16px",

                          paddingTop:"5px",

                          paddingBottom:"2px",

                         

                        },

                        pageSize: 10,

                        pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

                        maxBodyHeight: 500,

                        addRowPosition: "first",

                        actionsColumnIndex: -1,

                        //grouping: true,

                        exportButton: true,
                    }}


                />
                :(userType === "buhead")?
                <MaterialTable
                    title="Active Project List"
                    columns={columns2}
                    style={{ color: "black", fontSize: "13px" }}
                    data={data ? data : []}
                    editable={{

                    }}
                    options={{
                        headerStyle: {
                            backgroundColor: "#FF9E14",

                          color: "white",

                          fontSize: "16px",

                          paddingTop:"5px",

                          paddingBottom:"2px",

                        },
                        pageSize: 10,

                        pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

                        maxBodyHeight: 500,

                        addRowPosition: "first",

                        actionsColumnIndex: -1,

                        //grouping: true,

                        exportButton: true,
                    }}


                />
                :
                <MaterialTable
                    title="Active Project List"
                    columns={columns3}
                    style={{ color: "black", fontSize: "13px" }}
                    data={data ? data : []}
                    editable={{

                    }}
                    options={{
                        headerStyle: {
                            backgroundColor: "#FF9E14",

                            color: "white",
  
                            fontSize: "16px",
  
                            paddingTop:"5px",
  
                            paddingBottom:"2px",
                        },
                        pageSize: 10,

                        pageSizeOptions: [10, 15, 20, 30, 50, 75, 100],

                        maxBodyHeight: 500,

                        addRowPosition: "first",

                        actionsColumnIndex: -1,

                        //grouping: true,

                        exportButton: true,
                    }}


                />

            }
        </div>
        //</Card>
    )
}

export default ProjectsTable;
