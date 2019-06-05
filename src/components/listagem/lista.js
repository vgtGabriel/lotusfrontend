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
import {getDonorsList} from '../../services/userServices'
import Donor from './donor'

class ToListDonors extends Component {
    constructor(props){
        super(props);

        this.state={
            donorerList:[]
        }
    }
    async componentDidMount(){
        this.subscribeToEvents();
        await getDonorsList().then(
            response=>{
                this.setState({donorerList:response},()=>{
                    console.log('lista:', this.state.donorerList)
                })
                //console.log('aqui:', response.data.username);
            },
            error=>{
                console.log('error')
            }
            )
        }
        subscribeToEvents = () =>{
            // const socket = socket('http://localhost:3000');
            // socket.on('test',data =>{
            //     this.setState({list:[data, ...this.state.list]})
            // });
            // socket.on('donorsUpdate', data =>{
            //     this.setState({
            //         list: this.state.list.map(
            //             donor => (donor._id === data._id ? data : donor)
            //         )
            //     });
            // });
        };
        
handleChange(e) {
    // const { name, value } = e.target;
    // const {doador}  = this.state;
    // doador[name] = value;

    // this.setState({doador:doador});
}

async handleSubmit(e) {
    e.preventDefault();

    const {doador} = this.state;
    console.log('doador:', doador);
    // await setDonors(doador).then(
    //   user =>{
    //       console.log(user);
    //   },
    //   error =>{
    //       this.setState({alertMessage:error.data.error});
    //   }
    // )
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
                                <h4>Status</h4>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                {this.state.donorerList.map(doador =>(
                            <Donor key ={doador._id} doador = {doador} />
                        ))}
               </div>
            </>
        );
    }
}
export default ToListDonors;