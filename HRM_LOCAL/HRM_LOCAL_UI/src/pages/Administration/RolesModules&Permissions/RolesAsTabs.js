import {Tab,Nav,Container,Row,Col} from "react-bootstrap";

const RolesAsTabs = () => {
    return(
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={6}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h1>  one </h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h1>  Two </h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          )
}

export default RolesAsTabs;