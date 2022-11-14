import React from 'react'
import { Card, } from 'react-bootstrap'
// import Card from '@mui/material/Card';

const SingleCard = (props) => {
    return (
        <div>
            {/* Re-Usable card */}

            <Card align="center" style={{ color: props.color, fontSize: props.fontSize, marginBottom: '8px',paddingTop: '6px' }}> <h6> {props.name}  </h6> </Card>
            {/* <br></br> */}

            <Card align='center' style={{ height: '38px' }}>
              
                    <h6  style={{ paddingTop: '6px' }}>  {props.data ? props.data.length : 0} </h6>
                

            </Card>

        </div>
    )
}

export default SingleCard 