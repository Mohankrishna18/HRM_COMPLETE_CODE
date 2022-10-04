import React from 'react'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import axios from "../../../../Uri"

import "react-toastify/dist/ReactToastify.css";
import Card from 'react-bootstrap/Card'
import './ContentCreatorDetails.css';



const ClientDetailsTable = () => {

    const [fieldsData, setFieldsData] = useState([])

    // useEffect(() => {
    //     axios.get("/superAdmin/getAllContentCreators")
    //         .then((response) => {
    //             setFieldsData(response.data)


    //         })
    //         .catch((err) => { toast.error("data is not getting") })
    // }, [])
    console.log(typeof (fieldsData.subscriptionEndDate))
    console.log(fieldsData);


    const renderedtable = (data, index) => {
        // date format (dd-mm-yyyy)
        var tempDate = new Date(data.dateOfJoining);

        var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');


        return (

            <tr key={index}>
                <td>{index + 1}</td>
                {/* give your component fields/attributes */}
                <td>{data.firstName}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.email}</td>
                {/* <td>{data.dateOfJoining}</td> */}
                <td>{dob}</td>

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
                            <th>Company Name</th>
                            <th>Phone Number</th>
                            <th> Email</th>
                            <th>Date Of Joining</th>
                        </tr>

                    </thead>
                    <tbody style={{ fontSize: '18px' }}>
                        {/* {fieldsData.map(renderedtable)} */}


                        {/* Static data for table */}
                        
                                <tr><td>2</td>
                                    <td>TCS  </td>
                                    <td> 8951757194 </td>
                                    <td>TCS@gmail.com </td>
                                    <td>12/06/2022 </td>

                                </tr>

                                <tr><td>3</td>
                                    <td>Infosys  </td>
                                    <td> 8123656563 </td>
                                    <td>Infosys@gmail.com </td>
                                    <td>18/06/2022 </td>

                                </tr>

                                <tr><td>4</td>
                                    <td>Infotech </td>
                                    <td> 8123656133 </td>
                                    <td>Infotech@gmail.com </td>
                                    <td>09/06/2022 </td>

                                </tr>


                                <tr><td>5</td>
                                    <td>Wipro </td>
                                    <td> 8134567898 </td>
                                    <td>Wipro@gmail.com </td>
                                    <td>17/06/2022 </td>

                                </tr>

                                <tr><td>6</td>
                                    <td>Google </td>
                                    <td> 8123656123 </td>
                                    <td>Google@gmail.com </td>
                                    <td>09/06/2022 </td>

                                </tr>
                                <tr><td>7</td>
                                    <td>ahex </td>
                                    <td> 8123656123 </td>
                                    <td>ahex@gmail.com </td>
                                    <td>19/03/2022 </td>

                                </tr>
                                <tr><td>8</td>
                                    <td>Cisco </td>
                                    <td> 8123656123 </td>
                                    <td>cisco@gmail.com </td>
                                    <td>06/02/2022 </td>

                                </tr>
                                <tr><td>9</td>
                                    <td>Amd </td>
                                    <td> 8123656123 </td>
                                    <td>amd@gmail.com </td>
                                    <td>13/05/2022 </td>

                                </tr>
                                <tr><td>10</td>
                                    <td>Amazon </td>
                                    <td> 8123656123 </td>
                                    <td>amazonindia@gmail.com </td>
                                    <td>01/06/2022 </td>

                                </tr>
                                {/* <tr><td>11</td>
                                    <td>flipkart </td>
                                    <td> 8123656123 </td>
                                    <td>flipkartindia@gmail.com </td>
                                    <td>15/08/2022 </td>

                                </tr> */}


                    </tbody>
                </Table>

            </div>

        </div>
    )
}



export default ClientDetailsTable;