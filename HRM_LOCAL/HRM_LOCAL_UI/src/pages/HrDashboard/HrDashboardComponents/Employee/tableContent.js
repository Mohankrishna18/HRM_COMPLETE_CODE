import React from 'react';
import Moment from 'react-moment';
import AvtarComponent from '../../../../commonComponents/AvtarComponent';

// This is the table constant/settings which needed to render table elements
export const tableConstants = () => {
  return [
    // {
    //   title: 'Name',
    //   render: rowData => {
    //     return <AvtarComponent data={rowData}/>;
    //   },
    // },
    {
      title: 'Employee ID',
      render: rowData => {
        return <span>{rowData.employeeId}</span>;
      },
    },
    {
      title: 'Email',
      render: rowData => {
        return <span>{rowData.email}</span>;
      },
    },
    {
      title: 'Phone',
      render: rowData => {
        return <span><Moment format="DD/MM/YYYY">
        {rowData.dateOfJoining}
      </Moment></span>;
      },
    },
    {
      title: 'Role',
      render: rowData => {
        return <span>{rowData.designationName}</span>;
      },
    },
  ];
};
