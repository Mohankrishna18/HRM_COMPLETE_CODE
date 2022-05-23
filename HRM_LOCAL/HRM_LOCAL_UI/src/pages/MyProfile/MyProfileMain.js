import React,{memo} from "react";
import {Row,Col} from "react-bootstrap"


import MyProfile from "./MyProfileComponents/MyProfile";

const MyProfileMain = () => {
  return (
    <div>
      <Row>
        <Col>
        <MyProfile/>
        </Col>
      </Row>
    
    </div>
  );
};
export default memo(MyProfileMain);