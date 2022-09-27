
import React from 'react'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import axios from "../../../../Uri"

import "react-toastify/dist/ReactToastify.css";
import Card from 'react-bootstrap/Card'



const PocDetailsTable = () => {

    const [fieldsData, setFieldsData] = useState([])
    // useEffect(() => {
    //     axios.get("/course/getCourses")
    //         .then((response) => {
    //             setFieldsData(response.data)

    //         })
    //         .catch((err) => { toast.error("data is not getting") })
    // }, [])
    console.log(typeof (fieldsData.courseTitle))

    const renderedtable = (data, index) => {


        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.courseTitle}</td>
                <td>{data.creationDate}</td>
                <td>{data.courseCategory}</td>
                <td>{data.description}</td>
                <td>{data.status} </td>
            </tr>
        )
    }

    return (
        <div>
            <div className='scroll' style={{ height: '500px' }}>

                <Table hover className="table table-borderless"  >
                    <thead style={{ fontSize: '20px' }}>
                        <tr>
                            <th>SNo.</th>
                            <th>POC Name</th>
                            <th>Email</th>
                            <th>Phone Number </th>
                            <th> Company Name</th>
                            

                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '18px' }}>
                        {/* {fieldsData.map(renderedtable)} */}
                        <tr><td>1</td>
                                    <td>Jenifer </td>
                                    <td>Jenifer@gmail.com </td>
                                    <td style={{ color: 'green' }}>9731741756 </td>
                                    <td>Infosys</td></tr>

                                <tr><td>2</td>
                                    <td>James </td>
                                    <td>jamesgosh@gmail.com </td>
                                    <td style={{ color: 'green' }}>8971651689 </td>
                                    <td>arshaa</td></tr>


                                <tr><td>1</td>
                                    <td>Stavin </td>
                                    <td>stavinjames@gmail.com </td>
                                    <td style={{ color: 'green' }}>6324769821 </td>
                                    <td>Google</td></tr>

                                <tr><td>3</td>
                                    <td>Dhruv </td>
                                    <td>dhruvBagdal@gmail.com </td>
                                    <td style={{ color: 'green' }}>8951757197 </td>
                                    <td>TCS</td></tr>


                                <tr><td>4</td>
                                    <td>Stefen </td>
                                    <td>stefen@gmail.com </td>
                                    <td style={{ color: 'green' }}>7892002262 </td>
                                    <td>Infotech</td></tr>

                                <tr><td>5</td>
                                    <td> Devin </td>
                                    <td>devin@gmail.com </td>
                                    <td style={{ color: 'green' }}>8272165923 </td>
                                    <td>Wipro</td></tr>

                    </tbody>
                </Table>

            </div >
        </div >
    )
}

export default PocDetailsTable;