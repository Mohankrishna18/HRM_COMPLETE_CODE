import React from 'react'

import OverAllGraphs from './GraphBars/OverAllGraphs'
import PMOCards from './PMOCards'


const PMO_Dashboard = () => {
    return (
        <div>
            <PMOCards />

            <OverAllGraphs/>
        </div>
    )
}

export default PMO_Dashboard