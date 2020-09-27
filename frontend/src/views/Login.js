import React, {Component} from 'react'

import * as UserRoutes from '../middleware/API/user/routes'
import {isEmail, isEmpty} from 'validator';
import {Button, Input, FormGroup, Form, Row, Col} from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: {value: '', isValid: undefined},
            password: {value: '', isValid: undefined},
            loginFailed: false
        }
    }

    login = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email.value,
            password: this.state.password.value
        };
        UserRoutes.login(user)
            .then(response => {
                this.props.history.push('/home');
            }).catch(error => {
            console.log(error);
            window.alert(error.err);
            this.setState({loginFailed: true})
        });
    };

    handleAndValidate = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: this.validate(e.target.name, value)}, () => {
        });
    };

    validate = (name, value) => {
        let prev = this.state[name];
        prev.value = value;

        if (typeof prev.value === "string" && isEmpty(prev.value)) {
            prev.isValid = false;
        } else {
            switch (name) {
                case 'email':
                    prev.isValid = isEmail(prev.value);
                    break;
                case 'password':
                    prev.isValid = true;
                    break;
                default:
                    prev.isValid = true;
                    break;
            }
        }

        return prev;
    };

    redirectToSignup = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <>
                <div style={{textAlign: 'center', padding: 150}}>
                    <h1>
                        Entrar
                    </h1>
                    <Form onSubmit={this.login} style={{marginTop: 30}}>
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder={'Email'}
                                        value={this.state.email.value}
                                        onChange={this.handleAndValidate}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        placeholder={'Senha'}
                                        value={this.state.password.value}
                                        onChange={this.handleAndValidate}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            type="submit"
                            color="primary"
                        >
                            Entrar
                        </Button>
                        <div onClick={this.redirectToSignup}>
                            <p style={{textAlign: 'center', marginTop: 20, cursor: 'pointer'}}>Ainda não possui uma conta? Registre-se aqui</p>
                        </div>
                    </Form>
                </div>
            </>
        );
    }
}


export default Login;
