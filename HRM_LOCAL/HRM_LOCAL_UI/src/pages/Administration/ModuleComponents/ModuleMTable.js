import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";

export default function ModuleEditableTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/user/getModuleData");
    setData(res.data.data);
    console.log(res.data);
  };
  const [columns, setColumns] = useState([
    // { title: 'ID', field: 'departmentId', editable: false },
    // {title:"ID",field:"id"},
    { title: "Module Name", field: "moduleName" },

    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
  ]);

  // const [data, setData] = useState([
  //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  // ]);

  return (
    <Grid>
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(newData);
                const res = axios.post("/user/addModule", newData);
                setData([...data, newData]);
                loadData();

                resolve();
              }, 1000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              console.log(oldRow);
              console.log(updatedRow);
              const index = oldRow.moduleId;
              console.log(index);
              const updatedRows = [...data];
              console.log(updatedRows);
              updatedRows[oldRow.tableData.id] = updatedRow;
              console.log(updatedRows);
              setTimeout(() => {
                console.log(updatedRow);
                axios
                  .put(`/user/UpdateModuleById/${index}`, updatedRow)
                  .then((resp) => {
                    setData(updatedRows);
                    console.log("updated");
                    loadData();
                  })

                  .catch((err) => {
                    console.log(err);
                    console.log("not updated");
                    // toast.error("Server error");
                  });

                // toast.success(" Updated Successfully");
                console.log(updatedRows);
                resolve();
              });
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(oldData);
                const dataDelete = [...data];
                const index = oldData.moduleId;
                dataDelete.splice(index, 1);
                const res = axios
                  .delete(`/user/DeleteModuleDataByModuleID/${index}`)
                  .then((res) => {
                    console.log(res);
                    loadData();
                  });
                console.log(dataDelete);
                //setData(dataDelete);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          paging: false,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#FE924A",

            color: "white",
          },
        }}
      />
    </Grid>
  );
}
