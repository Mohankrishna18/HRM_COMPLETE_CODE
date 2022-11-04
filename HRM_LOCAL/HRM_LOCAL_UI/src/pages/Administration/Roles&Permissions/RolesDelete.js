import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "../../../Uri";

const RoleDelete = (props) => {
  console.log(props.deleteOnboard);

  const deleteuser = async () => {
    try {
      const res = await axios
        .delete(`/user/deleteRoleData/${props.data.deleteOnboard.roleId}`)
        .then((deletedResponse) => {
          const user = deletedResponse.data;
          console.log(deletedResponse);
          if (true) {
            props.func();
          } else {
            console.log("Props not Send");
          }
          toast.success("User deleted successfully!!!");
          //
        });
      // console.log(res)
      // if (res.data.status) {
      //     props.func();
      // }
      // else{
      //     console.log("Props Not Send");
      //   }
      //   toast.success("User deleted successfully!!!");

      //   setTimeout(5000);
      //   handleClose();
      //   toast.error("Something Went Wrong");
    } catch (error) {
      console.log(error);
    }
    props.deleteHandleClose();
  };
  return (
    <div>
      <Row>
        <Col>
          <Row>
            <Col style={{ paddingLeft: "10px" }}>
              {" "}
              Are you sure that you want to delete{" "}
              {props.deleteOnboard.roleName}?
            </Col>
          </Row>
          <Row style={{paddingLeft: "40%", marginTop: "5%"}}>
            <Col>
              <Button onClick={deleteuser} style={{ backgroundColor: "#f5896e",
                    borderColor: "#ff9b44",width: "40%", height: "120%"}}>Yes</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default RoleDelete;

// import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Button, Card, Form } from 'react-bootstrap'
// import RolesPermissions from "./RolesPermissions"
// import RolesCard from "./RolesCard"
// import "./styles.css";
// import AddRole from './AddRole';

// function RolesTabs() {
//     return (

//         <>
//         <Card responsive >
//           <Card.Header>
//             <Card.Body>
//               <AddRole />
//             </Card.Body>
//             </Card.Header>
//         </Card>
//         <div className="RolesTab">

//           <Tabs>
//             <TabList>
//               <Tab>
//                 <p>Title 1</p>
//               </Tab>
//               <Tab>
//                 <p>Title 2</p>
//               </Tab>
//               <Tab>
//                 <p>Title 3</p>
//               </Tab>
//               <Tab>
//                 <p>Title 4</p>
//               </Tab>
//               <Tab>
//                 <p>Title 5</p>
//               </Tab>
//             </TabList>

//             <TabPanel>
//               <div className="panel-content">
//              <RolesCard/>
//               </div>
//             </TabPanel>
//             <TabPanel>
//               <div className="panel-content">
//                 <h2>Any content 2</h2>
//               </div>
//             </TabPanel>
//             <TabPanel>
//               <div className="panel-content">
//                 <h2>Any content 3</h2>
//               </div>
//             </TabPanel>
//             <TabPanel>
//               <div className="panel-content">
//                 <h2>Any content 4</h2>
//               </div>
//             </TabPanel>
//             <TabPanel>
//               <div className="panel-content">
//                 <h2>Any content 5</h2>
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>

//         </>
//       );
// }

// export default RolesTabs
