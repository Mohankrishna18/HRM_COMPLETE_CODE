import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

import axios from '../../../../../Uri'


const PositionsOpenByDepartment = () => {

  const [departmentgraph, setDepartmentGraph] = useState([])

  const [data, setData] = useState([])





  useEffect(() => {
    axios.get("/recruitmentTracker/getJobsOpenByDepartmentName")
      .then((response) => {
        setDepartmentGraph(response.data)
        console.log(response)
        const data = response.data.map((item) => {
          return {
            type: item.departmentName,
            value: item.jobsOpen
          }
        })

        setData(data)

      })
      .catch((err) => {
        err.error
      })

  }, [])

console.log(data)

  const paletteSemanticRed = '#0000ff';
  const barLine = '#ff00ff';
  const brandColor = '#fe9945';
  const config = {
    data,
    xField: 'type',
    autoFit: true,
    yField: 'value',
    // changes color acording to value
    seriesField: 'value',
    // columnStyle: {
    //   // shape of bars
    // radius: [20,20],
    // },
    color: ({ value }) => {
      // if (value < 2) {
      //   return paletteSemanticRed;
      // }

      return brandColor;
    },
    label: {
      layout: [
        {
          type: 'interval-adjust-position',
        },

      ],
      // offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default PositionsOpenByDepartment;