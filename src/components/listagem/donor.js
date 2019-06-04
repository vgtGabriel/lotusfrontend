import React,{Component} from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Button,
    UncontrolledTooltip
} from 'reactstrap'

class Donor extends Component{

    state ={
        on:false
    }
    toggle = () =>{
        this.setState({
            on:!this.state.on
        })
    }

    render(){
        const {donor} = this.props;
        return(
            <>
                <Card>
                    <CardHeader onClick={this.toggle}>
                    <Row id="tooltip457194718">
                        <Col md='4'>
                            <h4>{donor.username}</h4>
                        </Col>
                        <Col md='3'>
                            <h4>{donor.data}</h4>
                        </Col>
                        <Col md='3'>
                                <h4>{donor.social}</h4>
                        </Col>
                        <Col md1='1'>
                        
                        </Col>
                        </Row>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip457194718"
                              placement="right"
                            >
                              Clique Para Editar
                            </UncontrolledTooltip>
                    </CardHeader>
                    {this.state.on &&(
                        <CardBody>
                            <h1>Toggle</h1>

                        </CardBody>
                    )}
                </Card>
            </>
        );
    }
}
export default Donor;