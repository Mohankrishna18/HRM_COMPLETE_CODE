import AvtarComponent from "../../../../commonComponents/AvtarComponent";

export const columns = [
    { headerName: 'Name', width: 70 , renderCell:params=><AvtarComponent data={params}/>},
    { field: 'employeeId', headerName: 'Employee ID', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'dateOfJoining',
      headerName: 'DOJ',
      type: 'date',
      width: 100,
    },
    {
      field: 'designationName',
      headerName: 'Role',
      width: 160,
    },
  ];