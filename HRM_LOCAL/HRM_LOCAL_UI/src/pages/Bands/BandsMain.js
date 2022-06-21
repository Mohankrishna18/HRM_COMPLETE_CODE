import React from 'react';
import { Col, Row, Card, Container } from "react-bootstrap";
import Bands from './BandsComponent/Bands'



const BandsMain = () => {
return (
<div style={{ paddingTop: "20px" }}>
<Card responsive className="scroll">
<Card.Header>
<Card.Body>
<Card.Title> Bands </Card.Title>
<Container>
<Row>
<Col xs={12}>
<Bands />
</Col>
</Row>
</Container>
</Card.Body>
</Card.Header>
</Card>
</div>
)
}



export default BandsMain