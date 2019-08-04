import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Input,
    FormGroup,
    Table
} from 'reactstrap';
import {getDonorsList} from '../../services/userServices'
import Donor from './donor'

class ToListDonors extends Component {
    constructor(props){
        super(props);
        this.state={
            donorerList:[]
        }
        this.updatedStatus = this.updatedStatus.bind(this);
    }
    async componentDidMount(){
        await getDonorsList().then(
            response=>{
                this.setState({donorerList:response.data},()=>{
                })
            },
            error=>{
                console.log('error')
            }
        )
    }
    async updatedStatus (){
        await getDonorsList().then(
            response=>{
                this.setState({donorerList:response.data},()=>{
                    this.props.history.push('/admin/list')
                    console.log('lista:', this.state.donorerList)
                })
            },
            error=>{
                console.log('error')
            }
        )
    }
    render() {
        return ( 
            <>
               <div className="content">
                   <h1 className='title'> Lista de Doadores </h1>
                <Card>
                    <CardHeader>
                        <h2>Filtro</h2>
                    </CardHeader>
                    <CardBody>
                    <Row>
                      <Col className="pr-md-3" md="4">
                        <FormGroup>
                          <label>Pesquisar</label>
                          <Input
                                placeholder="Nome Completo"
                                type="text"
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md='3'>
                                <h5>Nome do Doador</h5>
                            </Col>
                            <Col md='3'>
                                <h5>Data de Doação</h5>
                            </Col>
                            <Col md='2'>
                                <h5>Status</h5>
                            </Col>
                            <Col>
                                <h5>Valor da Doação</h5>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Table>
                    <tbody>
                    {this.state.donorerList.map(thisDonor =>(
                        <Donor testando={this.updatedStatus} key ={thisDonor.id} donor = {thisDonor} />
                        ))}
                    </tbody>
                </Table>
               </div>
            </>
        );
    }
}
export default ToListDonors;