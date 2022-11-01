import React, { useState, useEffect, useContext } from "react";
import axios from "../../Uri";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./Report.css";
import {UserContext} from "./ReportsMain";

const columns = [
    {
        title: "Task Title",
        dataIndex: "taskTitle",
        key: "taskTitle",
        width: 150,
        fixed: "left",
    },
    {
        title: "Week 1",
        children: [
            {
                title: "ActualHours",
                dataIndex: "actualHours",
                key: "actualHours",
                width: 120,
            },
            {
                title: "EstimatedHours",
                width: 120,
                dataIndex: "estimatedHours",
                key:"estimatedHours"
            }
        ]
    },
    {
        title: "Week 2",
        children: [
            {
                title: "ActualHours",
                dataIndex: "actualHours",
                key: "actualHours",
                width: 120,
            },
            {
                title: "EstimatedHours",
                width: 120,
                dataIndex: "estimatedHours",
                key:"estimatedHours"
            }
        ]
    },
    {
        title: "Week 3",
        children: [
            {
                title: "ActualHours",
                dataIndex: "actualHours",
                key: "actualHours",
                width: 120,
            },
            {
                title: "EstimatedHours",
                width: 120,
                dataIndex: "estimatedHours",
                key:"estimatedHours"
            }
        ]
    },
    {
        title: "Week 4",
        children: [
            {
                title: "ActualHours",
                dataIndex: "actualHours",
                key: "actualHours",
                width: 120,
            },
            {
                title: "EstimatedHours",
                width: 120,
                dataIndex: "estimatedHours",
                key:"estimatedHours"
            }
        ]
    },
    {
        title: "Week 5",
        children: [
            {
                title: "ActualHours",
                dataIndex: "actualHours",
                key: "actualHours",
                width: 120,
            },
            {
                title: "EstimatedHours",
                width: 120,
                dataIndex: "estimatedHours",
                key:"estimatedHours"
            }
        ]
    }
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: "John Brown",
        age: i + 1,
        street: "Lake Park",
        building: "C",
        number: 2035,
        companyAddress: "Lake Street 42",
        companyName: "SoftLake Co",
        gender: "M"
    });
}
const ReportTable = () => {
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const employeeId = da.data.employeeId;
    const {data,setData}=useContext(UserContext)
    const [getEmployee, setGetEmployee] = useState('');
    console.log(data)
    useEffect(() => {
        axios
            .get(`/task/getAllTasksByEmployeeId/${employeeId}`)
            .then((response) => {
                setData(response.data.map(row => ({taskTitle:row.taskTitle,actualHours:row.actualHours,estimatedHours:row.estimatedHours})));
                console.log(response.data.map(row => ({taskTitle:row.taskTitle,actualHours:row.actualHours,estimatedHours:row.estimatedHours})));
                // setdata(  res.data.data.map(row =>({first_name:row.first_name,last_name:row.last_name })) );
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{
                x: "calc(700px + 50%)",
                y: 240
            }}
        />
    );
}
export default ReportTable;
