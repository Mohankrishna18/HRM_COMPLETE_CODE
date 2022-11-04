import React, { Fragment, useState } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "../../../../Uri";
import {
  updateRoleModuleAccess
} from "../../../../redux/actions/UserAccessActions";
const TablePermission = () => {
  const originalData = useSelector((state) => state.roles.userAccessList);
  const [data, setData] = useState(originalData);
  //   const [selectedRows, setSelectedRows] = React.useState([]);
  const dispatch = useDispatch();

  const selectedRow = React.useRef([]);
  // useEffect(() => {
  //     dispatch(())
  // }
  // , [input])
  console.log(data);
  const tableColumns = [
    // { title: "Client", field: "id" },

    { title: "Module", field: "moduleName", editable: "never" },

    {
      title: "Create",
      field: "editAccess",
      editComponent: (props) => {
        console.log(props);
        return (
          <input
            style={{ padding: "50px" }}
            type="checkbox"
            checked={props.value}
            onChange={(e) => props.onChange(e.target.checked)}
          />
        );
      },
      render: (rowdata) => (
        <input type="checkbox" checked={rowdata.create} readOnly />
      ),
    },
    {
      title: "View",
      field: "viewAccess",
      editComponent: (props) => {
        console.log(props);
        return (
          <input
            type="checkbox"
            checked={props.value}
            onChange={(e) => props.onChange(e.target.checked)}
          />
        );
      },
      render: (rowdata) => (
        <input type="checkbox" checked={rowdata.read} readOnly />
      ),
    },

    {
      title: "Delete",
      field: "deleteAccess",
      editComponent: (props) => {
        console.log(props);
        return (
          <input
            size="500px"
            type="checkbox"
            checked={props.value}
            onChange={(e) => props.onChange(e.target.checked)}
          />
        );
      },
      render: (rowdata) => (
        <input type="checkbox" size={500} checked={rowdata.delete} readOnly />
      ),
    },
  ];
  const handleClick = (rows) => {
    selectedRow.current = rows;
  };
  return (
    <Fragment>
      <Grid style={{ borderBlockEndWidth: "2px" }}>
        <MaterialTable
          columns={tableColumns}
          data={originalData}
          title=" "
          backgroundColor=""
          options={{
            search: false,
            actionsColumnIndex: -1,
            // selection: true,

            headerStyle: {
              backgroundColor: "#f5896e",
              color: "white",
              fontSize: "12px",
              //height: "10px",
              //fontWeight: 'bold'
          },
          rowStyle: {
              fontSize: 14,
          },
          }}
          editable={{
            // onRowAdd: (newData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       setData([...data, newData]);

            //       resolve();
            //     }, 1000);
            //   }),
            onRowUpdate: (updatedRow, oldRow) =>
                        new Promise((resolve, reject) => {
                            console.log(oldRow);
                            console.log(updatedRow);

                            const index = oldRow.rmAccessId;

                            console.log(index);

                            const updatedRows = [...data];

                            console.log(updatedRows);

                            updatedRows[oldRow.tableData.id] = updatedRow;

                            console.log(updatedRows);
                            setTimeout(() => {
                                console.log(updatedRow)
                                const res = axios.put(`/login/updateRoleModule/${index}`, updatedRow)
                                    .then((resp) => {
                                        console.log(resp);
                                        // loadData()
                                    })
                                    .catch((err) => {
                                        console.log("not updated")
                                        // toast.error("Server error");

                                    })
                                  })
                                }),
                                  
            // onRowDelete: (oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataDelete = [...data];
            //       const index = oldData.tableData.id;
            //       dataDelete.splice(index, 1);
            //       setData([...dataDelete]);

            //       resolve();
            //     }, 1000);
            //   }),
          }}
        />
      </Grid>
    </Fragment>
  );
};

export default TablePermission;
