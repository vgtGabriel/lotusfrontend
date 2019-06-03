import React from 'react';
import LoginCss,{BtnLogin,LoginContent,InputsLogin,InputBorder} from './loginStyled';
import {login,loadAccount} from '../../services/userServices'
import icon from '../../images/avatar.svg'
import lock from '../../images/lock.svg'
import Checkbox from '../checkbox/checkbox'

import {
    FormGroup,
    Form,
  } from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            alertMessage:null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        this.subscribeToEvents();
        this.load();

    }
    load = async () =>{
        const load = await loadAccount();
        if(load)
            this.props.history.push('/home');
        else
            this.props.history.push('/');
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;
        if (!(email && password)) return;

            this.setState({ submitted: true });
            login({email,password}).then(
                user =>{
                    this.props.history.push('/admin');
                },
                error =>{
                    this.setState({alertMessage:error.data.error});
                }
            )
    
    }
    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted} = this.state;
        return (
            <>
            <div className = "wrapper">
                <LoginCss/>
                <div className= 'LoginContainer'>
                <LoginContent>
                    <div>
                        {!!this.state.alertMessage && <div className = 'alert'>{this.state.alertMessage}</div>}   
                    </div><br/>
                <Form name="form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <InputBorder>
                            <i className='av'><img src={icon}/></i>
                            <InputsLogin type="text" placeholder="EMAIL" name="email" value={email} onChange={this.handleChange} />
                        </InputBorder>
                        {submitted && !email &&  
                            <div>
                                <br/>
                            <h4>
                                EMAIL OBRIGATORIO
                            </h4>
                        </div>
                        }
                      
                      {/* div className = help-block avisa caso o usuario não tenha preencido o Email*/}
                     
                    <br/>
                    <InputBorder>
                        <i className='av'><img  src={lock}/></i>
                        <InputsLogin type="password" placeholder="PASSWORD"  name="password" value={password} onChange={this.handleChange} />
                    </InputBorder>
                    {submitted && !password &&
                        <div>
                            <br/>
                            <h4>
                                SENHA OBRIGATORIA
                            </h4>
                        </div>
                    }
                    {/* div className = help-block avisa caso o usuario não tenha preencido o password*/}
                    <br/>
                        <BtnLogin className='btnLogin btn-success'>LOGIN</BtnLogin>
                        {loggingIn && <img src="#" />}
                        {/* img é para colocar algum gif de carregando */}
                        <br/>
                        <Checkbox/>
                    </FormGroup>
                </Form>
            </LoginContent>
            </div>
        </div>
        </>
        );
    }
}
export default Login; 