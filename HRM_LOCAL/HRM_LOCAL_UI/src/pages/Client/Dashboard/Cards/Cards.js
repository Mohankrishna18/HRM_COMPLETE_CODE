import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import { FcApproval, FcConferenceCall, FcFlowChart, FcOnlineSupport } from 'react-icons/fc';
// import ClientAdmintable from '../Client Management/Client/Clienttable';
import { useState, useEffect } from 'react'
import axios from '../../../../Uri'
import './Cards.css';
// import './Cards.css';
import { FcBusinessman, FcManager, FcReadingEbook, FcInspection, FcExpired, FcMoneyTransfer, FcBullish } from "react-icons/fc";
import { MdDoneAll, MdDelete } from "react-icons/md";
import { FiRepeat } from "react-icons/fi";
import { CgOrganisation, CgCloseO } from "react-icons/cg";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
// import { HdrStrong } from '@material-ui/icons';
// import { MdPendingActions } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa";
// import './ClientCard.css';



const Cards = () => {

    let qualified = "Qualified";
    let approved = "Approved";
    let rejected = "Rejected";
    let onhold = "Onhold";
    let deleted = "Deleted";
    let converted = "Converted"

    // for card 1 , lead created count
    const [clientData, setClientData] = useState([])
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    useEffect(async () => {
        // API call
        // await axios.get("/company/getClientCount")
        axios.get("/Leads/getAllLeads")
            .then((response) => {

                // setClientData(response.data.data)
                // CompanyList is the attribute by which we get the value of total clients
                setClientData(response.data.data)

                console.log(response.data.data)
            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(clientData)

    // for card 2 , leads qualified, Approved, rejected, created  count
    const [qualifiedData, setQualifiedData] = useState([])

    useEffect(async () => {
        axios.get("/Leads/getCountsByStatus")
            .then((response) => {
                setQualifiedData(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(qualifiedData)

    // note: By using one useEffect method we have wired all the lead status cards ,as the API is same.


    // // for card 8th , Total  clients/compant card
    const [companyData, setCompanyData] = useState([])

    useEffect(async () => {
        //  await axios.get(`/branch/getBranchesByClientId/${userdata.data.clientId}`)
        axios.get("/clientProjectMapping/getAllClients")
            .then((response) => {
                setCompanyData(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(companyData)


    return (
        <div >
            <Row>
                {/* top heading */}
                <h3 align='left' style={{ paddingBottom: '5px', paddingRight: '30px', paddingTop: '10px' }}>  Leads Status</h3>

                {/* horizontle line */}
                <hr style={{ paddingTop: '1px', marginBottom: '-10px' }}></hr>

                {/* cards grid starts */}
                <Col style={{ paddingLeft: '0px' }}>

                    {/* First Row */}
                    <Row style={{ paddingTop: '13px' }}>

                        {/* Card 1 */}
                        {/* 1. lead created card */}
                        <Col xl={5} style={{ marginLeft: '12px' }} >
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                background: "linear-gradient(to left,#fc7232,#ffab14,#f29c1d)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h4 className='efect' align='center' style={{ color: "black", fontWeight: "300", fontSize: '40px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {clientData ? clientData.length : 0}


                                            {/* 45 */}
                                        </h4>

                                        <h6 style={{ color: "black", fontSize: '25px' }}> < FcManager style={{ fontSize: '29px' }} />   Leads Created </h6>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 2 */}
                        {/* 2. Lead qualifeied */}
                        <Col xl={5}  >
                            <Card>

                                <Card.Body>

                                    <div>

                                        {qualifiedData.map((data, index) => (

                                            (data.status === qualified) ? (

                                                <h4 className='efect' align='center' style={{ color: "black", fontSize: '40px', fontWeight: "300" }} >

                                                    {data.count}




                                                </h4>
                                            ) : (<></>)


                                        ))}
                                    </div>
                                    <h6 style={{ color: "#4EA000", fontSize: '25px', }}> <FcApproval style={{ fontSize: '25px' }} />  Leads Qualified </h6>


                                </Card.Body>
                            </Card>
                        </Col>

                        {/* vertical line*/}
                        <Col className="vl" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

                        </Col>
                    </Row>

                    <br></br>
                    {/* <br></br> */}

                    {/* Second row */}
                    <Row style={{ paddingBottom: '12px' }}>

                        {/* Card 3 */}
                        {/* 3. leads approved card */}
                        <Col xl={5} style={{ marginLeft: '12px' }}>
                            <Card>
                                <Card.Body>

                                    <div >
                                        {qualifiedData.map((data, index) => (

                                            (data.status === approved) ? (

                                                <h4 className='efect' align='center' style={{ color: "black", fontSize: '40px', fontWeight: "300" }} >

                                                    {data.count}




                                                </h4>
                                            ) : (<></>)


                                        ))}
                                    </div>
                                    <h6 align='left' style={{ color: "#0277BD", fontSize: '25px' }}>  <BsCheck2Square style={{ fontSize: '21px', color: "blue" }} /> Leads Approved </h6>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 4 */}
                        {/* 4. lead converted card */}
                        <Col xl={5}>
                            <Card>
                                <Card.Body>

                                    <div>
                                        {qualifiedData.map((data) => (

                                            (data.status === rejected) ? (

                                                <h4 className='efect' align='center' style={{ color: "black", fontSize: '38px', fontWeight: "300" }} >

                                                    {data.count}

                                                </h4>
                                                //    else zero
                                            ) : (<h4></h4>)


                                        ))}

                                    </div>
                                    <h6 align='left' style={{ color: "#FF3632", fontSize: '24px', }}> <CgCloseO style={{ fontSize: '25px', color: "red" }} />   Leads Rejected </h6>

                                </Card.Body>
                            </Card>

                        </Col>




                        {/* Verticle line */}
                        <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", }}></Col>

                    </Row>

                </Col>
                {/* First section ends */}

                {/* ---------------------- */}

                {/* Second section -[Right side] */}
                <Col>
                    {/* icon big */}
                    <FcBullish style={{ fontSize: '330px', paddingLeft: '80px', marginLeft: '60px', textDecorationLine: 'underline' }} />

                </Col>

                <hr style={{ paddingTop: '1px', marginBottom: '-10px' }}></hr>

            </Row>
            <br></br>
            {/* ----------------------------------------------------------------------------- */}
            {/* Second row division  */}
            <Row>

                <br></br>
                <br></br>
                {/* First card */}
                {/* lead converted card */}
                <Col xl={3}>
                    <Card style={{ height: '120px', paddingTop: '0px' }}>
                        <Card.Body>

                            <div >
                                {qualifiedData.map((data) => (

                                    (data.status === converted) ? (

                                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '40px', fontWeight: "300" }} >

                                            {data.count}




                                        </h4>
                                        //    else zero
                                    ) : (<h4></h4>)


                                ))}
                            </div>
                            <h6 align='left' style={{ color: "blue", fontSize: '25px', align: "center", }}>  <FiRepeat style={{ fontSize: '25px', color: '#fe6714' }} />&nbsp; Leads Converted </h6>

                        </Card.Body>
                    </Card>

                </Col>

                {/* Second card */}
                {/* lead onhold card */}
                <Col xl={3} >
                    <Card style={{
                        height: '120px',
                        //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                        background: "linear-gradient(to left,#fc7232,#ffab14,#f29c1d)",
                    }} >
                        <Card.Body style={{}}>

                            <div >
                                {qualifiedData.map((data) => (

                                    (data.status === onhold) ? (

                                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '40px', fontWeight: "300" }} >

                                            {data.count}




                                        </h4>
                                        //    else zero
                                    ) : (<h4></h4>)


                                ))}
                            </div>
                            <h6 align='left' style={{ color: "voilet", fontSize: '26px', align: "center", paddingLeft: '10px', }}>  <GiSandsOfTime style={{ fontSize: '30px', color: "red", }} />&nbsp; Leads OnHold </h6>

                        </Card.Body>
                    </Card>

                </Col>
                {/* Third card */}
                {/* lead deleted */}

                <Col xl={3} >
                    <Card style={{
                        height: '120px', paddingTop: '0px',
                        //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                        // background: "linear-gradient(to left,#fc7232,#ffab14,#f29c1d)",
                    }} >
                        <Card.Body style={{}}>

                            <div >
                                {qualifiedData.map((data) => (

                                    (data.status === deleted) ? (

                                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '40px', fontWeight: "300" }} >

                                            {data.count}




                                        </h4>
                                        //    else zero
                                    ) : (<h4></h4>)


                                ))}
                            </div>
                            <h6 align='left' style={{ color: "#e60000", fontSize: '26px', align: "center", paddingLeft: '10px', }}>  <MdDelete style={{ fontSize: '31px', color: 'orangered' }} />&nbsp;Leads Deleted </h6>

                        </Card.Body>
                    </Card>

                </Col>

                {/* Fourth card */}
                {/* total company/clients card */}
                <Col xl={3} >
                    <Card style={{
                        height: '120px',
                        //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                        background: "linear-gradient(to left,#fc7232,#ffab14,#f29c1d)",
                    }} >
                        <Card.Body style={{}}>

                            <div >
                                <h4 className='efect' align='center' style={{ color: "black", fontWeight: "300", fontSize: '35px', paddingTop: '2px' }}>
                                    {/* {companyData} */}
                                    {companyData? companyData.length : 0}
                                    {/* 28 */}
                                </h4>
                            </div>
                            <h6 align='left' style={{ color: "voilet", fontSize: '22px', align: "center", fontWeight: "550" }}>  <FcBusinessman style={{ fontSize: '32px' }} />Total Clients/Company </h6>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <br></br>
            {/* horizontle line */}
            <hr style={{ paddingTop: '1px', marginBottom: '-10px' }}></hr>
        </div>

    )
}

export default Cards;


