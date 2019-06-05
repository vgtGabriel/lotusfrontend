import React,{Component} from "react";
import CadastroCss from './cadastroStyled';
import {setDonors} from '../../services/userServices'
import InputM from 'react-input-mask'

// reactstrap components
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
      doador:{
        nomecompleto:'',
        rg:'',
        cpf:'',
        nascimento:'',
        sexo:'',
        email:'',
        telefone:'',
        celular:'',
        whatsapp:'',
        estado:'',
        cidade:'',
        bairro:'',
        logradouro:'',
        numero:'',
        cep:'',
        referencia:'',
        complemento:''  ,
        doadorfixo:'',
        datadedoacao:''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    const { name, value } = e.target;
    const {doador}  = this.state;
    doador[name] = value;

    this.setState({doador:doador});
}

async handleSubmit(e) {
    e.preventDefault();

    const {doador} = this.state;
    console.log('doador:', doador);
    await setDonors(doador).then(
      user =>{
          console.log(user);
      },
      error =>{
          this.setState({alertMessage:error.data.error});
      }
    )
}
    render() {
      const {doador} = this.state;
        return (
            <>
            <CadastroCss/>
              <div className="content">
                  <h1 className="title">Novo Doador</h1>
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
                              name="nomecompleto" value={doador.nomecompleto}
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
                              name="rg" value={doador.rg}
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
                              name="cpf" value={doador.cpf}
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
                            <InputM className ='form-control'
                              placeholder="dd/mm/aaaa"
                              type="text"
                              name="nascimento" value={doador.nascimento}
                              onChange={this.handleChange}
                              mask ='99/99/9999'
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1 " md="6">
                          <FormGroup>
                            <label> Sexo:</label>
                            <div className="radio">
                              <Col>
                                <input type="radio" value='false' name="sexo" id="masculino" onChange={this.handleChange} />
                                <label htmlFor="masculino">Masculino</label>
                                <input type="radio" value='true' name="sexo" id="feminino" onChange={this.handleChange} />
                                <label htmlFor="feminino">Feminino</label>
                              </Col>
                            </div>
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
                              name="email" value={doador.email}
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
                              name="telefone" value={doador.telefone}
                              onChange={this.handleChange}
                              mask ='(99) 99999-9999'
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="4">
                          <FormGroup>
                            <label>Celular</label>
                            <InputM 
                              className='form-control'
                              placeholder="(00)00000-0000"
                              type="tel"
                              name="celular" value={doador.celular}
                              onChange={this.handleChange}
                              mask ='(99) 99999-9999'
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label>Whatsapp</label>
                            <InputM 
                              className='form-control'
                              placeholder="(00)00000-0000"
                              type="tel"
                              name="whatsapp" value={doador.whatsapp}
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
                              name="estado" value={doador.estado}
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
                              name="cidade" value={doador.cidade}
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
                              name="bairro" value={doador.bairro}
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
                              name="logradouro" value={doador.logradouro}
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
                              name="numero" value={doador.numero}
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
                              name="cep" value={doador.cep}
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
                              name="complemento" value={doador.complemento}
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
                              name="referencia" value={doador.referencia}
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
                              <InputM
                                className="form-control"
                                placeholder="dd/mm/aaaa"
                                type="text"
                                name="datadedoacao" value={doador.datadedoacao}
                                onChange={this.handleChange}
                                mask="99/99/9999 99:99"
                              />
                            </FormGroup>
                          </Col>
                          <Col md='4'>
                            <FormGroup>
                              <label> Tornar Doador fixo?:</label>
                              <div className="radio">
                                <Col>
                                  <input type="radio" value="true" name="doadorfixo" id="radioYes" onChange={this.handleChange} />
                                  <label htmlFor="radioYes">Sim</label>
                                  <input type="radio" value="false" name="doadorfixo" id="radioNo" onChange={this.handleChange}/>
                                  <label htmlFor="radioNo">Não</label>
                                </Col>
                              </div>
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