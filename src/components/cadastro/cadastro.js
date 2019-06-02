import React,{Component} from "react";
import CadastroCss from './cadastroStyled';
import {createDoador} from '../../services/userServices'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
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
        username: '',
        password: '',
        submitted: false,
        alertMessage:null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

async handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {username} = this.state;
    console.log(username);
    // if (email && password) {
    //     await createDoador(email,password).then(
    //         user =>{
    //            console.log('ok');
    //         },
    //         error =>{
    //             this.setState({alertMessage:error.data.error});
    //         }
    //     )
    // };
}
    render() {
      const {username} = this.props;
        return (
            <>
            <CadastroCss/>
              <div className="content">
                  <h1 className="title">Novo Doador</h1>
                  <Form name='fomr'  onSubmit={this.handleSubmit}>
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
                            name="username" value={username}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>RG</label>
                          <Input
                            placeholder="0000000000-0"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>
                            CPF
                          </label>
                          <Input
                          placeholder="000.000.000-00"
                          type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="2">
                        <FormGroup>
                          <label>Data da Nascimento</label>
                          <Input
                            placeholder="00/00/00"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1 " md="6">
                      <FormGroup>
                        <label> Sexo:</label>
                          <div className="radio">
                            <fildset>
                                <Col>
                                    <input type="radio" value="0" name="campo-radio" id="campo-radio1" />
                                    <label for="campo-radio1">Masculino</label>
                                    <input type="radio" value="0" name="campo-radio" id="campo-radio2" />
                                    <label for="campo-radio2">Feminino</label>
                                </Col>
                            </fildset>
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
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Telefone</label>
                          <Input
                            placeholder="(00)00000-0000"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Celular</label>
                          <Input
                            placeholder="(00)00000-0000"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Whatsapp</label>
                          <Input
                            placeholder="(00)00000-0000"
                            type="text"
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
                            />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            placeholder="Juazeiro do Norte"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <FormGroup>
                          <label>Bairro</label>
                          <Input
                            placeholder="Bairro"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <FormGroup>
                          <label>Logradouro</label>
                          <Input
                            placeholder="Ex: Rua, Av..."
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Numero</label>
                          <Input
                            placeholder="Ex: Rua, Av..."
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>CEP</label>
                          <Input
                            placeholder="00000-000"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Complemento</label>
                          <Input
                            placeholder="Complemento"
                            type="text"
                            />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Ponto de Referência</label>
                          <Input
                            placeholder="Ponto de Referência"
                            type="text"
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
                              <label>Modalidade de Doação</label>
                              <Input
                                placeholder="Fixo"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col md='4'>
                            <FormGroup>
                              <label> Tornar Doador fixo?:</label>
                                <div className="radio">
                                  <fildset>
                                      <Col>
                                        <input type="radio" value="0" name="campo-radio" id="campo-radio3" />
                                        <label for="campo-radio3">Sim</label>
                                        <input type="radio" value="0" name="campo-radio" id="campo-radio4" />
                                        <label for="campo-radio4">Não</label>
                                      </Col>
                                  </fildset>
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