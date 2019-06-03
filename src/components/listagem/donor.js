import React,{Component} from 'react'
import {
    Card,
    CardBody,
    Col,
    Row
} from 'reactstrap'

class Donor extends Component{

    render(){
        const {donor} = this.props;
        return(
            <>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md='4'>
                                <h4>{donor.username}</h4>
                            </Col>
                            <Col md='4'>
                                <h4>{donor.data}</h4>
                            </Col>
                            <Col md='4'>
                                <h4>{donor.social}</h4>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </>
        );
    }
}
export default Donor;