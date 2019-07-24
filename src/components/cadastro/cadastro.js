import React,{Component} from "react";
import CadastroCss from './cadastroStyled';
import {setDonors} from '../../services/userServices'
import InputM from 'react-input-mask'
// import ModalC from '../Modal/Modal'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donor:{
        nome_completo:'',
        rg:'',
        cpf:'',
        nascimento: new Date(),
        email:'',
        telefone:'',
        street:'',
        number:'',
        district:'',
        zip_code:'',
        state:'',
        city:'',
        reference:'',
        complement:'',
        donated_at: new Date()
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const {donor}  = this.state;
    donor[name] = value;
    this.setState({donor});
  }
  async handleSubmit(e) {
    e.preventDefault()

    const {donor} = this.state;
    console.log('doador:', donor);
      await setDonors(donor).then(
        user =>{
          this.setState({alertMessage:'Doador Cadastrado com sucesso'});
          this.setState({modalShow:true})
          console.log('aqui', user);
        },
        error =>{
          this.setState({alertMessage:error.data.error});
          this.setState({modalShow:true})
        }
      )
  } 
  render() {
    const {donor} = this.state;
      return (
        <>
          <CadastroCss/>
            <div className="content">
              <h1 className="title">Novo Doador</h1>
                <Form name='htmlFor'  onSubmit={this.handleSubmit}>
                <Card>
                  <CardHeader>
                    <h4 className='title'>Dados Pessoais</h4>
                    {/* <ModalC
                    /> */}
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="pr-md-3" md="4">
                        <FormGroup>
                            <label>Nome Completo</label>
                            <Input
                              placeholder="Nome Completo"
                              type="text"
                              name="nome_completo" value={donor.nome_completo}
                              onChange={this.handleChange}
                              mask="+4\9 99 999 99"
                              require
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
                              require
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
                              require
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="2">
                          <FormGroup>
                            <label>Data da Nascimento</label>
                            <Input
                              placeholder="dd/mm/aaaa"
                              type="date"
                              name="nascimento" value={donor.nascimento}
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
                              require
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
                              name="state" value={donor.state}
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
                              name="city" value={donor.city}
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
                              name="district" value={donor.district}
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
                              name="street" value={donor.street}
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
                              name="number" value={donor.number}
                              onChange={this.handleChange}
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
                              name="zip_code" value={donor.zip_code}
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
                              name="complement" value={donor.complement}
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
                              name="reference" value={donor.reference}
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
                              {/* 
                              <label>Data de Doação</label>
                              <Input
                                className="form-control"
                                placeholder="dd/mm/aaaa"
                                type="date"
                                
                                
                              /> */}
                              <Input
                                placeholder="dd/mm/aaaa"
                                type="date"
                                name="donated_at"
                                value={donor.donated_at} 
                                onChange={this.handleChange}/>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardFooter>
                        <Button className="btn-fill" color="info" type="submit">
                          Cadastrar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Form>
        </div>
      </>
        );
    }
}
export default Cadastro; 