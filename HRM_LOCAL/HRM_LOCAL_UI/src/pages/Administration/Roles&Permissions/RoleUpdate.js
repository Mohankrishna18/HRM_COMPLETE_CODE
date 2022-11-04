import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const RoleUpdate = (props) => {

  console.log(props.updateOnboard);


  
  const [roleName, setRoleName]= useState(props.updateOnboard.roleName);
  const [permission1, setPermission1] = useState(props.updateOnboard.permission1);
  const [permission2, setPermission2] = useState(props.updateOnboard.permission2);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow();
  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {

      
      roleName,

    } = form;
    const newErrors = {};


    
    if (!roleName || roleName === "")
      newErrors.roleName = "Please Enter Module Name";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/user/UpdateModuleById/${props.updateOnboard.moduleId}`, {

       
        roleName,
        permission1

      })
      .then((response) => {
        const user = response.data;
        console.log(response);
        if (response.data.status) {
          props.func();
        }
        else {
          console.log("Props not Send")
        }
        toast.success("Module updated successfully!!!");
        // console.log(user);
      })
      // .catch((err) => {
      //   console.log(err);
      //   toast.error("Something Went Wrong");

      // });
    props.handleClose();
  };

  const [module, setModule] = useState([]);
  useEffect(() => {
    axios
      .get("/user/getModuleData")
      .then((response) => {
        setModule(response.data.data);
        console.log(response.data.data);
      })
      
      .catch(() => {
        toast.error("Data is not getting");
      });
  }, []);

  return (
    <div>
          <Form
            ref={forms}
            className="formone"
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom:10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Role Name *</Form.Label>
                <Form.Control
                  required
                  className="roleName"
                  type="text"
                  controlId="roleName"
                  placeholder="Role Name"
                  onChange={(event) => setRoleName(event.target.value)}
                  value={roleName}
                  maxLength={30}
                //   onChange={(e) => setField("moduleName", e.target.value)}
                  isInvalid={!!errors.roleName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.roleName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-1 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-1"
                  controlId="permission1"
                  value={permission1}
                  onChange={(e) => setPermission1(e.target.value)}
                  isInvalid={!!errors.permission1}
                >
                 
                  
                  {module.map((module1) => (
                    <option>{module1.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission1}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-2 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-2"
                  controlId="permission2"
                  value={form.permission2}
                  onChange={(e) => setPermission2(e.target.value)}
                  isInvalid={!!errors.permission2}
                >
                  
                  
                  {module.map((module2) => (
                    <option>{module2.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission2}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-3 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-3"
                  controlId="permission3"
                  value={form.permission3}
                  onChange={(e) => setField("permission3", e.target.value)}
                  isInvalid={!!errors.permission3}
                >
                  <option>Select</option>
                  
                  {module.map((module3) => (
                    <option>{module3.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission3}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-4 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-4"
                  controlId="permission4"
                  value={form.permission4}
                  onChange={(e) => setField("permission4", e.target.value)}
                  isInvalid={!!errors.permission4}
                >
                  <option>Select</option>
                 
                  {module.map((module4) => (
                    <option>{module4.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission4}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-5 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-5"
                  controlId="permission5"
                  value={form.permission5}
                  onChange={(e) => setField("permission5", e.target.value)}
                  isInvalid={!!errors.permission5}
                >
                  <option>Select</option>
                  
                  {module.map((module5) => (
                    <option>{module5.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission5}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-6 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-6"
                  controlId="permission6"
                  value={form.permission6}
                  onChange={(e) => setField("permission6", e.target.value)}
                  isInvalid={!!errors.permission6}
                >
                  <option>Select</option>
                  
                  {module.map((module6) => (
                    <option>{module6.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission6}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-7 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-7"
                  controlId="permission7"
                  value={form.permission7}
                  onChange={(e) => setField("permission7", e.target.value)}
                  isInvalid={!!errors.permission7}
                >
                  <option>Select</option>
                  
                  {module.map((module7) => (
                    <option>{module7.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission7}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-8 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-8"
                  controlId="permission8"
                  value={form.permission8}
                  onChange={(e) => setField("permission8", e.target.value)}
                  isInvalid={!!errors.permission8}
                >
                  <option>Select</option>
                
                  {module.map((module8) => (
                    <option>{module8.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission8}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-9 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-9"
                  controlId="permission9"
                  value={form.permission2}
                  onChange={(e) => setField("permission9", e.target.value)}
                  isInvalid={!!errors.permission9}
                >
                    {/* jneje */}
                  <option>Select</option>
                
                  {module.map((module9) => (
                    <option>{module9.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission9}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-10 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-10"
                  controlId="permission10"
                  value={form.permission10}
                  onChange={(e) => setField("permission10", e.target.value)}
                  isInvalid={!!errors.permission10}
                >
                  <option>Select</option>
                  
                  {module.map((module10) => (
                    <option>{module10.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission10}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#ff9b44",
                    float: "right",
                    width: "40%",
                    height: "120%",
                    borderRadius: "25px",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                  
                </Button>
              </Col>
              <Col>
              <Button
                  style={{
                    backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",
                    alignItems: "center",
                    width: "40%",
                    height: "120%",
                    borderRadius: "25px",
                  }}
                  
                  type="close"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Col>
            </Row>
          </Form>

    </div>
  );
};

export default RoleUpdate;




// import React, { useState, useEffect, useLayoutEffect } from 'react'
// import MaterialTable from 'material-table'
// import Grid from '@mui/material/Grid'
// import axios from "../../../Uri";
// export default function RoleEditableTable() {
//     const [data, setData] = useState([]);
//     const [depname, setDepname] = useState([])
//     const [status, setStatus] = useState({})
//     useEffect(() => {
//         axios.get("/user/getModuleData").then((res) => {
//             console.log(res.data.data)
//             setDepname(res.data.data)
//         });
//     }, []);
//     console.log(depname)
//     const loadDept = () => {

//         depname.map(row => status[row.moduleName] = row.moduleName)
//         console.log(status)
//         setStatus(status)

//     }
//     useEffect(() => {
//         loadDept()
//     })


//     useEffect(() => {
//         loadData();
//     }, []);
//     const loadData = async () => {
//         const res = await axios.get("/user/getAllRoles");
//         setData(res.data.data);
//         console.log(res.data.data)


//     };


//     const [columns, setColumns] = useState([
//         // { title: 'ID', field: 'designationId', editable: false },
//         {
//             title: 'Role Name', field: 'roleName', headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-1', field: 'permission1',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-2', field: 'permission2',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-3', field: 'permission3',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-4', field: 'permission4',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-5', field: 'permission5',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-6', field: 'permission6',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-7', field: 'permission7',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-8', field: 'permission8',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-9', field: 'permission9',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },
//         {
//             title: 'Permission-10', field: 'permission10',  lookup: status, headerStyle: {

//                 backgroundColor: "#FE924A",

//                 color: "white",

//             },
//         },

//     ]);



//     return (
//         <Grid>
//             <MaterialTable responsive
//                 title=""
//                 columns={columns}
//                 data={data}
//                 editable={{
//                     onRowAdd: newData =>

//                         new Promise((resolve, reject) => {
//                             setTimeout(() => {
//                                 console.log(newData)
//                                 const res = axios.post("/user/addRole", newData)
//                                 console.log(res)
//                                 setData([...data, newData]);
//                                 loadData();
                                

//                                 resolve();
//                             }, 1000)
//                         }),
//                     onRowUpdate: (updatedRow, oldRow) =>
//                         new Promise((resolve, reject) => {
//                             console.log(oldRow);
//                             console.log(updatedRow);
//                             const index = oldRow.roleId;
//                             console.log(index);
//                             const updatedRows = [...data];
//                             console.log(updatedRows);
//                             updatedRows[oldRow.tableData.id] = updatedRow;
//                             console.log(updatedRows);

//                             setTimeout(() => {

//                                 console.log(index)
//                                 console.log(updatedRow)
//                                 const res = axios.put(`/user/UpdateRoleId/${index}`, updatedRow)
//                                     .then((resp) => {
//                                         console.log(resp);
//                                         loadData()
//                                         setData(updatedRows)
//                                     })

//                                     .catch((err) => {
//                                         console.log("not updated")
//                                         // toast.error("Server error");
//                                     });

//                                 setData(updatedRows);
//                                 console.log("updated")
//                                 // toast.success(" Updated Successfully");
//                                 console.log(updatedRows);
//                                 resolve();
//                             });
//                         }),



//                     onRowDelete: oldData =>
//                         new Promise((resolve, reject) => {
//                             setTimeout(() => {
//                                 console.log(oldData)
//                                 const dataDelete = [...data];
//                                 const index = oldData.roleId;
//                                 dataDelete.splice(index, 1);
//                                 const res = axios.delete(`/user/deleteRoleData/${index}`)
//                                     .then((res) => {
//                                         console.log(res)
//                                         loadData()
//                                     })
//                                 console.log(dataDelete)
//                                 //setData(dataDelete);

//                                 resolve()
//                             }, 1000)
//                         }),
//                 }}
//                 options={{
//                     paging: false,
//                     // paginationType:'normal',
//                     // pageSize:20,
//                     actionsColumnIndex: -1,
//                     headerStyle: {

//                         backgroundColor: "#FE924A",

//                         color: "white",

//                     },
//                 }}
//             />
//         </Grid>
//     )
// }