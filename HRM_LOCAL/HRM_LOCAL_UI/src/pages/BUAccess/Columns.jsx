import Action from "./Action";

// This is the table constant/settings which needed to render table elements
export const tableConstants = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return [
    {
      title: 'Employee ID',
      render: rowData => {
        return <span>{rowData.employeeId}</span>;
      },
    },
    {
      title: 'Name',
      render: rowData => {
        return <span>{rowData.fullName}</span>;
      },
    },
    {
      title: 'Bussiness Unit',
      render: rowData => {
        return <span>
        {rowData.departmentName}
      </span>;
      },
    },
    {
      title: 'Role',
      render: rowData => {
        return <span>{rowData.designationName}</span>;
      },
    },
    {
        title: 'Name',
        render: rowData => {
          return <Action data={rowData} onClick={handleClose}/>;
        },
      },
  ];
};
