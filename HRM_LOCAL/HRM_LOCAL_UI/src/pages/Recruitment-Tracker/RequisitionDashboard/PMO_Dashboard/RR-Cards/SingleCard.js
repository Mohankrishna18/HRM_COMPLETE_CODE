import React from 'react'
import { Card, } from 'react-bootstrap'
// import Card from '@mui/material/Card';

const SingleCard = (props) => {
    return (
        <div>
            {/* Re-Usable card */}

            <Card align="center" style={{ color: props.color, fontSize: props.fontSize, marginBottom: '8px',paddingTop: '6px' }}> <h5> {props.name}  </h5> </Card>
            {/* <br></br> */}

            <Card align='center' style={{ height: '38px' }}>
              
                    <h5  style={{ paddingTop: '6px' }}>  {props.data ? props.data.length : 0} </h5>
                

            </Card>

        </div>
    )
}

export default SingleCard