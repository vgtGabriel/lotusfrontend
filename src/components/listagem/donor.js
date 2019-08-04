import React,{Component} from 'react'
import Style from './style'
import {isSameDay,isAfter} from 'date-fns'
import InputM from 'react-input-mask'
import {deleteDonor} from '../../services/userServices'
import Modal from '../Modal/Modal'
import {Redirect} from 'react-router-dom'
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

class Donor extends Component{
    constructor(props){
      super(props)
      
      this.state ={
          on:false
      }
      this.getDate = this.getDate.bind(this);
      this.getStatus = this.getStatus.bind(this);
      this.deleteDonor = this.deleteDonor.bind(this);
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
      else if(isAfter(new Date(),data)){
        return 'pendente'
      }
      else{
        return 'normal'
      }
    }
    deleteDonor = () =>{
      const {donor} = this.props

      console.log(donor.id);
      deleteDonor(donor.id).then(
        response =>{
          console.log(response.data);
          this.props.testando();
        },
        error =>{
           console.log(error.response.data.error)
        }
      )
    }
    render(){
        const {donor} = this.props;
        console.log(donor);
        return(
            <>
            <Style/>
                <tr>
                {/* onClick={this.toggle} */}
                    <td>

                    <Row id='arroz'>
                      <Col className="pl-md-1" md='3'>
                        <Row>

                    <Button
                        color ="link"
                        title=""
                        type ="button"
                        onClick={this.toggle}
                        >
                        <i className="tim-icons icon-pencil"/>
                        </Button>
                            <h5>{donor.nome_completo}</h5>
                        </Row>
                        </Col>
                        <Col md='3'>
                            <h5>{this.getDate(donor.next_donation)}</h5>
                        </Col>
                        <Col md='2'>
                            <h5 className = {this.getStatus(donor.next_donation)}>{this.getStatus(donor.next_donation)}</h5>
                        </Col>
                        <Col>
                            {this.getStatus(donor.next_donation) !== "normal" ? (
                              <Row>
                                  <Col>
                                  <Input type="text" placeholder="R$ 200,00"/>
                                  </Col>
                                  <Col>
                                    <Button>
                                      ok
                                    </Button>
                                  </Col>
                              </Row>
                            ): <Row>
                                <Col>
                                  <h5>Aguarando proxima doação</h5>
                                </Col>
                                <Col>
                                  <Button>
                                    Nova
                                  </Button>
                                </Col>
                              </Row>
                            }
                        </Col>
                    </Row>

                      <UncontrolledTooltip
                              delay={0}
                              target='arroz'
                              placement="right"
                              >
                              Clique Para Editar
                        </UncontrolledTooltip>
                      </td>
                    
                </tr>
                <tr>
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
                                      name="nome_completo" value={(donor.nome_completo)}
                                       
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
                                      name="rg" value={(donor.rg)}
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
                                      name="cpf" value={(donor.cpf)}
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
                                      name="email" value={(donor.email)}
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
                                      name="telefone" value={(donor.telefone)}
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
                                      name="state"
                                      value={(donor.address[0]) && donor.address[0].state}       
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md="3">
                                  <FormGroup>
                                    <label>Cidade</label>
                                    <Input
                                      placeholder="Juazeiro do Norte"
                                      type="text"
                                      name="city" value={(donor.address[0]) && donor.address[0].city}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md="5">
                                  <FormGroup>
                                    <label>Bairro</label>
                                    <Input
                                      placeholder="Bairro"
                                      type="text"
                                      name="district" value={(donor.address[0]) && donor.address[0].district}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md="5">
                                  <FormGroup>
                                    <label>Logradouro</label>
                                    <Input
                                      placeholder="Ex: Rua, Av..."
                                      type="text"
                                      name="street" value={(donor.address[0]) && donor.address[0].street }
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md="3">
                                  <FormGroup>
                                    <label>Numero</label>
                                    <Input
                                      placeholder="Ex: Rua, Av..."
                                      type="text"
                                      name="number" value={(donor.address[0]) && donor.address[0].number}
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
                                      name="cep" value={(donor.address[0]) && donor.address[0].zip_code}
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
                                      name="complemento" value={(donor.address[0]) 
                                        && donor.address[0].complment}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md="3">
                                  <FormGroup>
                                    <label>Ponto de Referência</label>
                                    <Input
                                      placeholder="Ponto de Referência"
                                      type="text"
                                      name="referencia" value={(donor.address[0]) && donor.address[0].reference}
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
                      <Modal
                        name = "Deletar"
                        color= "danger"
                        sendFunction={this.deleteDonor}
                        context ="Tem certeza que deseja deletar esse Doador?"
                      />
                        </Col>
                        </Row>
                    </CardFooter>
                  </Card>
                        </Form>
                      
                      </CardBody>
                  )}
                </tr>
            </>
        );
    }
}
export default Donor;