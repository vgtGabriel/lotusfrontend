import React, { Component } from 'react';
import ListaCss from './listaStyled';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Input,
    FormGroup
} from 'reactstrap';
import NameList from './NameList'
class Lista extends Component {

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
                        <NameList/>
                    </CardBody>
                </Card>
               </div>
            </>
        );
    }
}
export default Lista;