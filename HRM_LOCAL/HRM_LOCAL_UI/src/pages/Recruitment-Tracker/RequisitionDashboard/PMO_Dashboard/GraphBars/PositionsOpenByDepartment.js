import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

import axios from '../../../../../Uri'


const PositionsOpenByDepartment = () => {

  const [departmentgraph, setDepartmentGraph] = useState([])

  useEffect(async () => {
    axios.get("/recruitmentTracker/getAllRequisitionRequests")
      .then((response) => {
        setDepartmentGraph(response.data.data)
        console.log(response.data)
      })
      .catch((err) => {
        err.error
      })

  }, [])
  console.log(departmentgraph)

   // filter for departments name
  const data1 = departmentgraph ? departmentgraph.filter((item) => item.departmentName === "Cloud"):0
  console.log(data1)

  const data2 = departmentgraph ? departmentgraph.filter((item) => item.departmentName === "IT"):0
  console.log(data2)

  const data3 = departmentgraph ? departmentgraph.filter((item) => item.departmentName === "HR"):0
  console.log(data3)

  const data4 = departmentgraph ? departmentgraph.filter((item) => item.departmentName === "Sales"):0
  console.log(data4)

  const data5 = departmentgraph ? departmentgraph.filter((item) => item.departmentName === "Management"):0
  console.log(data5)
  // Note: further if more departments are added, then write the filter method for them as above

  const data = [
    {
      type: 'Cloud',
      value: data1.length,
    },
    {
      type: 'IT',
      value: data2.length,
    },
    {
      type: 'HR',
      value: data3.length,
    },
    {
      type: 'Sales',
      value: data4.length,
    },
    {
      type: 'Mgmt',
      value: data5.length,
    },
  ];
  // shows red color if value is less than 2
  const paletteSemanticRed = '#0000ff';
  const barLine = '#ff00ff';
  const brandColor = '#f4c430';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    // changes color acording to value
    seriesField: 'value',
    // columnStyle: {
    //   // shape of bars
    // radius: [20,20],
    // },
    color: ({ value }) => {
      if (value < 2) {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      layout: [
        
        {
          type: 'interval-adjust-position',
        }, 
        
      ],
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default PositionsOpenByDepartment;

