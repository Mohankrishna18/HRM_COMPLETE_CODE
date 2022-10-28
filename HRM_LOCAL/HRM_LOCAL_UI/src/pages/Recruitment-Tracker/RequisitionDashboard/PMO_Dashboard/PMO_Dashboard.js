import React from 'react'
import Cards from './Cards'
import OverAllGraphs from './GraphBars/OverAllGraphs'


const PMO_Dashboard = () => {
    return (
        <div>
            <h4 style={{textDecoration:"underline", paddingTop:"20px"}}>Requisition Dashboard</h4>
            <Cards />

            <OverAllGraphs/>
        </div>
    )
}

export default PMO_Dashboard