import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import axios from '../../../../../Uri'
import Moment from 'moment';

const ApplicantsMonthly = () => {

    const [monthlyGraph, setMonthlyGraph] = useState([])

    useEffect(async () => {
        axios.get("/candidate/getCandidate")
            .then((response) => {
                setMonthlyGraph(response.data)
            })
            .catch((err) => {
                err.error
            })
    }, [])

    // for month wise hired candidates   
    const hired = monthlyGraph.filter((item) => item.candidateStatus === "Hired")
    console.log(hired)

    // for january
    const january = hired.filter(item => item.candidateCreatedOn.includes("2022-01"));
    console.log(january)

    // for feb
    const feb = hired.filter(item => item.candidateCreatedOn.includes("2022-02"));
    console.log(feb)

    // for march
    const march = hired.filter(item => item.candidateCreatedOn.includes("2022-03"));
    console.log(march)

    // for april
    const april = hired.filter(item => item.candidateCreatedOn.includes("2022-04"));
    console.log(april)

    // for may
    const may = hired.filter(item => item.candidateCreatedOn.includes("2022-05"));
    console.log(may)

    // for june
    const june = hired.filter(item => item.candidateCreatedOn.includes("2022-06"));
    console.log(june)

    // for july
    const july = hired.filter(item => item.candidateCreatedOn.includes("2022-07"));
    console.log(july)

    // for august
    const august = hired.filter(item => item.candidateCreatedOn.includes("2022-08"));
    console.log(august)

    // for september
    const september = hired.filter(item => item.candidateCreatedOn.includes("2022-09"));
    console.log(september)

    // for october
    const hiredOnOctober = hired.filter(item => item.candidateCreatedOn.includes("2022-10"));
    console.log(hiredOnOctober)

    // for november ==> here we get the hired filter into this variable and again filetr that got value which includes nov i.e => 11 
    const hiredOnNovember = hired.filter(item => item.candidateCreatedOn.includes("2022-11"));
    console.log(hiredOnNovember)

    // for december ==> here we get the hired filter into this variable and again filetr that got value which includes nov i.e => 11 
    const hiredOnDecember = hired.filter(item => item.candidateCreatedOn.includes("2022-12"));
    console.log(hiredOnDecember)





    // filter the hired data according to month.


    const data = [
        {
            type: 'Apr',
            value: april.length,
        },
        {
            type: 'May',
            value: may.length,
        },
        {
            type: 'June',
            value: june.length,
        },
        {
            type: 'July',
            value: july.length,
        },
        {
            type: 'Aug',
            value: august.length,
        },
        {
            type: 'Sept',
            value: september.length,
        },
        {
            type: 'Oct',
            value: hiredOnOctober.length,
        },
        {
            type: 'Nov',
            value: hiredOnNovember.length,
        },
        {
            type: 'Dec',
            value: hiredOnDecember.length,
        },
        {
            type: 'Jan',
            value: january.length,
        },
        {
            type: 'Feb',
            value: feb.length,
        },
        {
            type: 'Mar',
            value: march.length,
        },
    ];
    const paletteSemanticRed = '#F4664A';
    const brandColor = '#fe8c50';
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'value',
        color: ({ type }) => {
            

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

export default ApplicantsMonthly;
//  ReactDOM.render(<DemoColumn />, document.getElementById('container'));
