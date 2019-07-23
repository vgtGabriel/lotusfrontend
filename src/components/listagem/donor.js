import React,{Component} from 'react'
import Style from './style'
import {isSameDay,isPast} from 'date-fns'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    UncontrolledTooltip,
    FormGroup,
    Input,
    CardFooter,
    Button,
    Form
} from 'reactstrap'
import InputM from 'react-input-mask'

class Donor extends Component{

    state ={
        on:false
    }
    toggle = () =>{
        this.setState({
            on:!this.state.on
        })
    }
    getDate = (data) =>{
        if(data){
            data = String(data).split(' ');
            let date = String(data[0]).split('-');
            return [parseInt(date[2]),' - ',parseInt(date[1]),' - ',parseInt(date[0])];
        }else{
            return 'NaN'
        }
    }
    getStatus = (data) =>{
      if(isSameDay(new Date(),data)){
        return 'hoje'
      }
      else if(isPast(new Date(),data)){
        return 'pendente'
      }
      else{
        return 'normal'
      }

    }
    render(){
        const {donor} = this.props;
        const id = donor.id;
        console.log('proptes', id);
        return(
            <>
            <Style/>
                <Card>
                    <CardHeader onClick={this.toggle}>
                    <Row id='arroz'>
                        <Col md='4'>
                            <h4>{donor.nome_completo}</h4>
                        </Col>
                        <Col md='4'>
                            <h4>{this.getDate(donor.next_donation)}</h4>
                        </Col>
                        <Col md='4'>
                            <h4 className = {this.getStatus(donor.next_donation)}>{this.getStatus(donor.next_donation)}</h4>
                        </Col>
                        <Col md1='1'>
                        
                        </Col>
                        </Row>
                            <UncontrolledTooltip
                              delay={0}
                              target='arroz'
                              placement="right"
                            >
                              Clique Para Editar
                            </UncontrolledTooltip>
                    </CardHeader>
                    {this.state.on &&(
                        <CardBody>
                            <Form name='htmlFor'  onSubmit={this.handleSubmit}>
                  <Card>
                    <CardHeader>
                        <h4 className='title'>Dados Pessoais</h4>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-md-3" md="4">
                          <FormGroup>
                            <label>Nome Completo</label>
                            <Input
                              placeholder="Nome Completo"
                              type="text"
                              name="nomecompleto" value={donor.nome_completo}
                              onChange={this.handleChange}
                              mask="+4\9 99 999 99"
                            // require
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="3">
                          <FormGroup>
                            <label>RG</label>
                            <InputM className='form-control'
                              placeholder="0000000000-0"
                              type="text"
                              name="rg" value={donor.rg}
                              onChange={this.handleChange}
                              mask="9999999999-*"
                            //require
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label>CPF</label>
                            <InputM className='form-control'
                              placeholder="000.000.000-00"
                              type="text"
                              name="cpf" value={donor.cpf}
                              onChange={this.handleChange}
                              mask ="999.999.999-**"
                            // require
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="2">
                          <FormGroup>
                            <label>Data da Nascimento</label>
                            <Input
                              type="date"
                              name="nascimento"
                              value={new Date(donor.nascimento)}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h4 className='title'>Dados de Contatos</h4>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>E-mail</label>
                            <Input
                              placeholder="exemplo@gmail.com"
                              type="email"
                              name="email" value={donor.email}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="4">
                          <FormGroup>
                            <label>Telefone</label>
                            <InputM 
                              className='form-control'
                              placeholder="(00)00000-0000"
                              type="tel"
                              name="telefone" value={donor.telefone}
                              onChange={this.handleChange}
                              mask ='(99) 99999-9999'
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                        <h4 className='title'>Endereço</h4>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Estado</label>
                            <Input
                              placeholder="CE"
                              type="text"
                              name="estado" value={donor.address[0].state}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Cidade</label>
                            <Input
                              placeholder="Juazeiro do Norte"
                              type="text"
                              name="cidade" value={donor.address[0].city}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="5">
                          <FormGroup>
                            <label>Bairro</label>
                            <Input
                              placeholder="Bairro"
                              type="text"
                              name="district" value={donor.address[0].district}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="5">
                          <FormGroup>
                            <label>Logradouro</label>
                            <Input
                              placeholder="Ex: Rua, Av..."
                              type="text"
                              name="street" value={donor.address[0].street}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Numero</label>
                            <Input
                              placeholder="Ex: Rua, Av..."
                              type="text"
                              name="number" value={donor.address[0].number}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>CEP</label>
                            <InputM 
                              className='form-control'
                              placeholder="00000-000"
                              type="text"
                              name="cep" value={donor.address[0].zip_code}
                              onChange={this.handleChange}
                              mask= "99999-999"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Complemento</label>
                            <Input
                              placeholder="Complemento"
                              type="text"
                              name="complemento" value={donor.address[0].complement}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Ponto de Referência</label>
                            <Input
                              placeholder="Ponto de Referência"
                              type="text"
                              name="referencia" value={donor.address[0].reference}
                              onChange={this.handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h4 className='title'>Dados da doação</h4>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md='3'>
                            <FormGroup>
                              <label>Data de Doação</label>
                              <Input
                                type="date"
                                value = {new Date(donor.donated_at)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardFooter>
                          <Row>

                          <Col md="2">
                        <Button className="btn-fill" color="info" type="submit">
                          Salvar
                        </Button>
                          </Col>
                          <Col md="2">
                        <Button className="btn-fill" color="danger" type="submit">
                          Deletar
                        </Button>
                          </Col>
                          </Row>
                      </CardFooter>
                    </Card>
                  </Form>

                        </CardBody>
                    )}
                </Card>
            </>
        );
    }
}
export default Donor;