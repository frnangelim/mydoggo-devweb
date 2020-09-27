import React, {Component} from 'react'
import * as UserRoutes from '../middleware/API/user/routes'
import {isEmail, isEmpty} from 'validator';
import {toast} from 'react-toastify';
import {Col, FormGroup, Input, Row, Form, Button} from "reactstrap";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: {value: '', isValid: undefined},
            email: {value: '', isValid: undefined},
            password: {value: '', isValid: undefined},
            confirm_password: {value: '', isValid: undefined},
            errMsg: ''
        }
    }

    signup = (e) => {
        e.preventDefault();
        if (this.isSubmitValid()) {
            let user = {
                name: this.state.name.value,
                email: this.state.email.value,
                password: this.state.password.value,
            };
            UserRoutes.signup(user)
                .then(response => {
                    window.alert('Usuário cadastrado com sucesso!');
                    this.props.history.push('/login');
                }).catch(error => {
                console.log(error);
                window.alert(error.err)
            });
        } else {
            toast.error("Por favor, preencha todos os campos corretamente.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    isSubmitValid = () => {
        return this.state.email.isValid && this.state.password.isValid && this.state.confirm_password.isValid;
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
                    prev.isValid = (prev.value === this.state.confirm_password.value) && prev.value.length >= 4;
                    this.setState({
                        confirm_password: {
                            value: this.state.confirm_password.value,
                            isValid: prev.isValid
                        }
                    });
                    break;
                case 'confirm_password':
                    prev.isValid = (prev.value === this.state.password.value) && prev.value.length >= 4;
                    this.setState({password: {value: this.state.password.value, isValid: prev.isValid}});
                    break;
                default:
                    prev.isValid = true;
                    break;
            }
        }

        return prev;
    }

    redirectToLogin = () => {
        this.props.history.push('/login');
    };

    render() {
        return (
            <>
                <div>
                    <div style={{textAlign: 'center', padding: 150}}>
                        <Form onSubmit={this.signup}>
                            <h1>Registre-se</h1>
                            <Row style={{marginTop: 30}}>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email.value}
                                            onChange={this.handleAndValidate}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="6">
                                    <FormGroup>
                                        <Input
                                            name="name"
                                            id="name"
                                            placeholder="Nome completo"
                                            value={this.state.name.value}
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
                                            placeholder="Senha"
                                            value={this.state.password.value}
                                            onChange={this.handleAndValidate}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="12">
                                    <FormGroup>
                                        <Input
                                            name="confirm_password"
                                            type="password"
                                            id="password"
                                            placeholder="Repita a senha"
                                            value={this.state.confirm_password.value}
                                            onChange={this.handleAndValidate}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button
                                type="submit"
                                color="primary"
                            >
                                Registrar
                            </Button>

                            <div onClick={this.redirectToLogin}>
                                <p style={{textAlign: 'center', marginTop: 20, cursor: 'pointer'}}>Já possui uma conta? Faça o login.</p>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;
