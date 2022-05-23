import React from 'react'
import AddRole from './AddRole';
import './Styles/style.css';
import ModuleAccess from './ModuleAccess';
import {Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../../NavBar/Sidebar';
import NavBar from '../../../NavBar/NavBar';
import {Tab, Nav} from 'react-bootstrap';
import RolesAsTabs from './RolesAsTabs';
import RoleList from './components/RoleList';


const ModulesPermissions = () => {
  return (
    <div>
      <Container-fluid>    
        <Sidebar>
          <Row>
            <Col sm={12}><h1>Roles & Permissions</h1></Col>
          </Row>
          <Row>
            <Col sm={6}><RoleList /></Col>
            <Col sm={6}><ModuleAccess /></Col>
          </Row>
          <div>
          <RolesAsTabs/>
          </div>
        </Sidebar>
      </Container-fluid>
    </div>
  )
}

export default ModulesPermissions;