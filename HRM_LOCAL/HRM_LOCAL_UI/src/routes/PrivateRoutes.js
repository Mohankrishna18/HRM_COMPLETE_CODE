import React, { Fragment, memo, useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes, isLoggedIn } from "../utils/index";
import { Row, Col, Accordion } from "react-bootstrap";
import MapAllowedRoutes from "./MapAllowedRoutes";
import PrivateRouteConfig from "../config/PrivateRouteConfig";
import NavBar from "../commonComponents/Navbar";
import Sidebar from "../NavBar/Sidebar";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];

  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);

  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(PrivateRouteConfig); //you are sending an array of two objects
  } else {
    return <Redirect to="/" />;
  }

//Empty comment
  return (
    <>
      <Row>
        <Col xs={12} xxl={12} xl={12} lg={12} md={12} sm={12} >
          <NavBar />
        </Col>
      </Row>
      <Row>

        <Col xs={2} xxl={2} xl={2} lg={2} md={2} sm={2}  >
          {/* sidebar oprn close */}
        {/* style={{width: isOpen ? "270px" : "50px",backgroundColor:"black"}} */}
          <Sidebar
            routes={allowedRoutes}
            prefix={match.path}
            className="reports"
          />                                     
        </Col>
        <Col xs={10} xxl={10} xl={10} lg={10} md={10} sm={10}>

          <div className="PagesOfTheApp">
            {
              <MapAllowedRoutes routes={allowedRoutes} basePath="/app" />
            }
          </div>
        </Col>

      </Row>
    </>
  );
}
export default memo(PrivateRoutes);

// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';




// const PrivateRoutes = ({children}) => {
//   const[isOpen ,setIsOpen] = useState(true);
//   const toggle = () => setIsOpen (!isOpen);
//   const menuItem=[
//       {
//           path:"/",
//           name:"Dashboard",
//           icon:<FaTh/>
//       },
//       {
//           path:"/about",
//           name:"About",
//           icon:<FaUserAlt/>
//       },
//       {
//           path:"/analytics",
//           name:"Analytics",
//           icon:<FaRegChartBar/>
//       },
//       {
//           path:"/comment",
//           name:"Comment",
//           icon:<FaCommentAlt/>
//       },
//       {
//           path:"/product",
//           name:"Product",
//           icon:<FaShoppingBag/>
//       },
//       {
//           path:"/productList",
//           name:"Product List",
//           icon:<FaThList/>
//       }
//   ]
//   return (
//       <div >
//          <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//              <div className="top_section">
//                  <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                      <FaBars onClick={toggle}/>
//                  </div>
//              </div>
//              {/* <Sidebar/> */}
//              {
//                  menuItem.map((item, index)=>(
//                      <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                          <div className="icon">{item.icon}</div>
//                          <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                      </NavLink>
//                  ))
//              }
//          </div>
         
//       </div>
//   );
// };

// export default memo(PrivateRoutes);








