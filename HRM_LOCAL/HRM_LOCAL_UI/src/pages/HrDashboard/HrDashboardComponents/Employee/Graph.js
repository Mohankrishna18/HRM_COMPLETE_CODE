import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const Graph = () => {
  const data = [
    {
      name: 'All',
      department: 'IT',
      count: 20,
     
    },
    {
      name: 'All',
      department: 'Oracle',
      count: 30,
     
    },
    {
      name: 'All',
      department: 'Digital',
      count: 40,
     
    },
    {
      name: 'All',
      department: 'HR',
      count: 20,
     
    },
    {
      name: 'All',
      department: 'PMO',
      count: 20,
     
    },
    {
      name: 'All',
      department: 'TAG',
      count: 30,
     
    },
    {
      name: 'Male',
      department: 'IT',
      count: 10,
     
    },
    {
      name: 'Male',
      department: 'Oracle',
      count: 10,
     
    },
    {
      name: 'Male',
      department: 'Digital',
      count: 14,
     
    },
    {
      name: 'Male',
      department: 'HR',
      count: 9,
     
    },
    {
      name: 'Male',
      department: 'PMO',
      count: 14,
     
    },
    {
      name: 'Male',
      department: 'TAG',
      count: 3,
     
    },
    {
      name: 'Female',
      department: 'IT',
      count: 4,
     
    },
    {
      name: 'Female',
      department: 'Oracle',
      count: 10,
     
    },
    {
      name: 'Female',
      department: 'Digital',
      count: 12,
     
    },
    {
      name: 'Female',
      department: 'HR',
      count: 4,
     
    },
    {
      name: 'Female',
      department: 'PMO',
      count: 13,
     
    },
    {
      name: 'Female',
      department: 'TAG',
      count: 18,
     
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
      position: 'middle',
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

