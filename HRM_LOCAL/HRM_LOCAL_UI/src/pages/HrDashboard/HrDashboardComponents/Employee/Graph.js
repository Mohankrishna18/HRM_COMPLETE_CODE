import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "../../../../Uri"
import { Column } from '@ant-design/plots';

const Graph = () => {
  const [dataa, setData] = useState([])

 
  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")

      .then((res) => {
        const sata1 = res.data.data.filter(item => item.status === 'Active')
        setData(sata1);
        console.log(sata1);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
 // console.log(sata1)
 console.log(dataa)
  const IT =dataa.filter((item) => item.departmentName === "IT")
  const HR = dataa.filter((item) => item.departmentName === "HR")
  const TAG = dataa.filter((item) => item.departmentName === "TAG")
  const PMO = dataa.filter((item) => item.departmentName === "PMO")
  const Digital = dataa.filter((item) => item.departmentName === "DIGITAL")
  const Oracle = dataa.filter((item) => item.departmentName === "ORACLE")
  const Management = dataa.filter((item) => item.departmentName === "MANAGEMENT")
  const ManagementMale=Management.filter((item) => item.gender === 'Male')
  const ManagementFemale=Management.filter((item) => item.gender === 'Female')
  const DigitalMale = Digital.filter((item) => item.gender === 'Male')
  const DigitalFemale = Digital.filter((item) => item.gender === 'Female')
  const Oraclefemale = Oracle.filter((item) => item.gender === 'Female')
  const ITmale = IT.filter((item) => item.gender === 'Male')
  const ITfemale = IT.filter((item) => item.gender === 'Female')
  const HRfemale = HR.filter((item) => item.gender === 'Female')
  const HRmale = HR.filter((item) => item.gender === 'Male')
  const TAGmale = TAG.filter((item) => item.gender === 'Male')
  const TAGfemale = TAG.filter((item) => item.gender === 'Female')
  const PMOmale = PMO.filter((item) => item.gender === 'Male')
  const PMOfemale = PMO.filter((item) => item.gender === 'Female')
  const Oraclemale = Oracle.filter((item) => item.gender === 'Male')


  const data = [
    {
      name: 'All',
      department: 'IT',
      count: IT.length,

    },
    {
      name: 'All',
      department: 'HR',
      count: HR.length,

    },
    {
      name: 'All',
      department: 'TAG',
      count: TAG.length,

    },
    {
      name: 'All',
      department: 'PMO',
      count: PMO.length,

    },

    {
      name: 'All',
      department: 'DIGITAL',
      count: Digital.length,

    },
    {
      name: 'All',
      department: 'ORACLE',
      count: Oracle.length,

    },
    {
      name: 'All',
      department: 'MANAGEMENT',
      count: Management.length,

    },
    {
      name: 'Male',
      department: 'DIGITAL',
      count: DigitalMale.length,

    },
    {
      name: 'Female',
      department: 'DIGITAL',
      count: DigitalFemale.length,

    },
    {
      name: 'Female',
      department: 'ORACLE',
      count: Oraclefemale.length,

    },
    {
      name: 'Male',
      department: 'ORACLE',
      count: Oraclemale.length,

    },

    {
      name: 'Male',
      department: 'IT',
      count: ITmale.length,

    },
    {
      name: 'Female',
      department: 'IT',
      count: ITfemale.length,

    },
    {
      name: 'Female',
      department: 'HR',
      count: HRfemale.length,

    },
    {
      name: 'Female',
      department: 'MANAGEMENT',
      count: ManagementFemale.length,

    },
    {
      name: 'Male',
      department: 'HR',
      count: HRmale.length,

    },
    {
      name: 'Male',
      department: 'MANAGEMENT',
      count: ManagementMale.length,

    },
    {
      name: 'Male',
      department: 'TAG',
      count: TAGmale.length,

    },
    {
      name: 'Female',
      department: 'TAG',
      count: TAGfemale.length,

    },
    {
      name: 'Male',
      department: 'PMO',
      count: PMOmale.length,

    },
    {
      name: 'Female',
      department: 'PMO',
      count: PMOfemale.length,

    },
  ];

  const config = {
    data,
    isGroup: true,
    xField: 'department',
    yField: 'count',
    seriesField: 'name',

    //color: ['#1ca9e6', '#f88c24'],
    // marginRatio: 0.1,
    label: {
      position: 'top',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};

export default Graph;
