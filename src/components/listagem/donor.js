import React,{Component} from 'react'
import Style from './style'
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
    render(){
        const {doador} = this.props;
        return(
            <>
            <Style/>
                <Card>
                    <CardHeader onClick={this.toggle}>
                    <Row id="arroz">
                        <Col md='4'>
                            <h4>{doador.nomecompleto}</h4>
                        </Col>
                        <Col md='4'>
                            <h4>{this.getDate(doador.datadedoacao)}</h4>
                        </Col>
                        <Col md='4'>
                            
                            <h4 className = {doador.status}>{doador.status}</h4>
                        </Col>
                        <Col md1='1'>
                        
                        </Col>
                        </Row>
                            <UncontrolledTooltip
                              delay={0}
                              target="arroz"
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
                                name="datadedoacao" value={this.getDate(doador.datadedoacao)}
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