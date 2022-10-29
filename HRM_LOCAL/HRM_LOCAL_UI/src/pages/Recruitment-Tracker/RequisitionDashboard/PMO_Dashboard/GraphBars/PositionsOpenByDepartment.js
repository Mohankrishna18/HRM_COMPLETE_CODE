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
  const data1 = departmentgraph.filter((item) => item.departmentName === "Cloud" )
    console.log(data1)

    const data2 = departmentgraph.filter((item) => item.departmentName === "Development")
    console.log(data2)

    const data3 = departmentgraph.filter((item) => item.departmentName === "Hr")
    console.log(data3)

    const data4 = departmentgraph.filter((item) => item.departmentName === "Sales")
    console.log(data4)

    const data5 = departmentgraph.filter((item) => item.departmentName === "Management")
    console.log(data5)
// Note: further if more departments are added, then write the filter method for them as above

const data = [
  {
    type: 'Cloud',
    value: data1.length,
},
{
    type: 'Develop',
    value: data2.length,
},
{
    type: 'Hr',
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
const paletteSemanticRed = 'red';
const barLine = '#ff00ff';
const brandColor = '#ffac14';
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
    if (value < 4) {
      return paletteSemanticRed;
    }

    return brandColor;
  },
  label: {
      content: (originData) => {
          const val = parseFloat(originData.value);

          if (val < 0.05) {
              return (val * 100).toFixed(1) + '%';
          }
      },
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

