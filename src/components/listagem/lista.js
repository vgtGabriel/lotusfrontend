import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Input,
    FormGroup,
} from 'reactstrap';
import DonorsList from './ListaDoadores'
import {getDonorsList} from '../../services/userServices'

class ToListDonors extends Component {
    constructor(props){
        super(props);

        this.state={
            lista:[]
        }
    }

    async componentDidMount(){
        await getDonorsList().then(
            response=>{
                this.setState({lista:response},()=>{
                    console.log('lista:', this.state.lista)
                })
                //console.log('aqui:', response.data.username);
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
                            <Col md='4'>
                                <h4>Nome do Doador</h4>
                            </Col>
                            <Col md='4'>
                                <h4>Data de Doação</h4>
                            </Col>
                            <Col md='3'>
                                <h4>Midias Sociais</h4>
                            </Col>
                        </Row>
                        <DonorsList lista={this.state.lista}></DonorsList>
                    </CardBody>
                </Card>
               </div>
            </>
        );
    }
}
export default ToListDonors;