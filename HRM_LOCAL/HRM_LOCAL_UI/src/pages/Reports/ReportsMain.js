import React,{createContext,useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Reports from './Report';
import ReportTable from './ReportTable';

export const UserContext = createContext(null)
const ReportsMain = () => {
  const [data,setData] = useState([])
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  return (
    <div className='example'>
      <UserContext.Provider value ={{data,setData}}>
      <Row>
        <Col>
        <Card.Title className="my-4"><h5>Reports</h5></Card.Title>  
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        </TabContext>
        </Box> 
        <Reports/>  
        <Row className="my-5">
          <Col md="12">
        <ReportTable /> 
        </Col>  
        </Row>   
    </Col>
      </Row>
      </UserContext.Provider>
    </div>
  )
}

export default ReportsMain;

