import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ApplicantsRecievedByDepartment = () => {
  const data = [
    {
      type: 'Technical',
      value: 45,
    },
    {
      type: 'Hr',
      value: 24,
    },
    {
      type: 'Finance',
      value: 29,
    },
    {
      type: 'Sales',
      value: 51,
    },
    {
      type: 'Operation Mgmt',
      value: 33,
    },
    {
        type: 'Other',
        value: 15,
      },
   
  ];
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#228B22';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
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

export default  ApplicantsRecievedByDepartment;
//  ReactDOM.render(<DemoColumn />, document.getElementById('container'));
