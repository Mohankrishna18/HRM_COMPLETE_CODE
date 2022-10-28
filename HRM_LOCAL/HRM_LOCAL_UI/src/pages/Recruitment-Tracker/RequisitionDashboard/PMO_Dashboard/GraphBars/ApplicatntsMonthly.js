import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ApplicantsMonthly = () => {
    const data = [
        {
            type: 'Apr',
            value: 2,
        },
        {
            type: 'May',
            value: 3,
        },
        {
            type: 'June',
            value: 4.45,
        },
        {
            type: 'July',
            value: 6.2,
        },
        {
            type: 'Aug',
            value: 2.9,
        },
        {
            type: 'Sept',
            value: 7.1,
        },
        {
            type: 'Oct',
            value: 1.9,
        },
        {
            type: 'Nov',
            value: 10,
        },
        {
            type: 'Dec',
            value: 4,
        },
        {
            type: 'Jan',
            value: 9,
        },
        {
            type: 'Feb',
            value: 6,
        },
        {
            type: 'Mar',
            value: 2.4,
        },
    ];
    const paletteSemanticRed = '#F4664A';
    const brandColor = '#5B8FF9';
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

export default ApplicantsMonthly;
//  ReactDOM.render(<DemoColumn />, document.getElementById('container'));
