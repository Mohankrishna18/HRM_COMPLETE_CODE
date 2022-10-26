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
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Server Error")
      });
  }, []);
  const IT = dataa.filter((item) => item.departmentName === "IT")
  const HR = dataa.filter((item) => item.departmentName === "Human Resource(HR)")
  const TAG = dataa.filter((item) => item.departmentName === "TAG")
  const PMO = dataa.filter((item) => item.departmentName === "PMO")
  const Digital = dataa.filter((item) => item.departmentName === "Digital")

  const Oracle = dataa.filter((item) => item.departmentName === "Oracle")

  const DigitalMale = Digital.filter((item) => item.gender === 'male')
  const DigitalFemale = Digital.filter((item) => item.gender === 'female')
  const Oraclefemale = Oracle.filter((item) => item.gender === 'female')
  const ITmale = IT.filter((item) => item.gender === 'male')
  const ITfemale = IT.filter((item) => item.gender === 'female')
  const HRfemale = HR.filter((item) => item.gender === 'female')
  const HRmale = HR.filter((item) => item.gender === 'male')
  const TAGmale = TAG.filter((item) => item.gender === 'male')
  const TAGfemale = TAG.filter((item) => item.gender === 'female')
  const PMOmale = PMO.filter((item) => item.gender === 'male')
  const PMOfemale = PMO.filter((item) => item.gender === 'female')
  const Oraclemale = Oracle.filter((item) => item.gender === 'female')


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
      department: 'Digital',
      count: Digital.length,

    },
    {
      name: 'All',
      department: 'Oracle',
      count: Oracle.length,

    },
    {
      name: 'Male',
      department: 'Digital',
      count: DigitalMale.length,

    },
    {
      name: 'Female',
      department: 'Digital',
      count: DigitalFemale.length,

    },
    {
      name: 'Female',
      department: 'Oracle',
      count: Oraclefemale.length,

    },
    {
      name: 'Male',
      department: 'Oracle',
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
      name: 'Male',
      department: 'HR',
      count: HRmale.length,

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