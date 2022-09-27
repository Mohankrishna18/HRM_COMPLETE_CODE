import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ContentCreatorDetails from './ClientDetailsTable/ClientDetailsTable';
import ClientSubcriptionDetails from './LeadDetailsTable/TotalLeadsTable';
import CourseSummary from './PocDetailsTable/PocDetails';

const Tables = () =>{
    return(
        <div>
            <Container>
                
                {/* clientSubscription details table import */}
                    <Col >
                    <ClientSubcriptionDetails/>
                    </Col>

                    <br></br>
                    <br></br>

                    {/* Course Summary Table import */}

                    <Col >
                     <CourseSummary/>
                    </Col>

                    <br></br>
                    <br></br>

                    {/* Content creator details Table import */}

                    <Col>
                    <ContentCreatorDetails/>
                    </Col>
                


                    {/* <Col >
                        <RecentClientsWithSubcription/>
                    </Col> */}

                   
            </Container>
        </div>
    )


}
export default Tables