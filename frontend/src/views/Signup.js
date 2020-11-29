import React, {useState} from 'react'
import * as UserRoutes from '../middleware/API/user/routes'
import {toast} from 'react-toastify';
import {Col, FormGroup, Input, Row, Form, Button} from "reactstrap";
import Navbar from "../components/Navbar";

const Signup = (props) => {
    const [email, setEmail] = useState({value: '', isValid: true});
    const [password, setPassword] = useState({value: '', isValid: true});
    const [confirmPassword, setConfirmPassword] = useState({value: '', isValid: true});
    const [name, setName] = useState({value: '', isValid: true});
    const [errMsg, setErrMsg] = useState('');

    const signup = (e) => {
        e.preventDefault();
        if (isSubmitValid()) {
            let user = {
                name: name.value,
                email: email.value,
                password: password.value,
            };
            UserRoutes.signup(user)
                .then(response => {
                    window.alert('Usuário cadastrado com sucesso!');
                    props.history.push('/auth/login');
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

    const isSubmitValid = () => {
        return email.value && password.value && confirmPassword.value;
    };

    const handle = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if (e.target.name === 'email')
            setEmail({value, isValid: true});
        if (e.target.name === 'password')
            setPassword({value, isValid: true});
        if (e.target.name === 'confirmPassword')
            setConfirmPassword({value, isValid: true});
        if (e.target.name === 'name')
            setName({value, isValid: true});
    };

    const redirectToLogin = () => {
        props.history.push('/auth/login');
    };

    return (
        <>
            <Navbar active={'signup'}/>
            <div>
                <div style={{textAlign: 'center', padding: 150}}>
                    <Form onSubmit={signup}>
                        <h1>Registre-se</h1>
                        <Row style={{marginTop: 30}}>
                            <Col sm="6">
                                <FormGroup>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email.value}
                                        onChange={handle}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Input
                                        name="name"
                                        id="name"
                                        placeholder="Nome completo"
                                        value={name.value}
                                        onChange={handle}
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
                                        value={password.value}
                                        onChange={handle}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Input
                                        name="confirmPassword"
                                        type="password"
                                        id="password"
                                        placeholder="Repita a senha"
                                        value={confirmPassword.value}
                                        onChange={handle}
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

                        <div onClick={redirectToLogin}>
                            <p style={{textAlign: 'center', marginTop: 20, cursor: 'pointer'}}>Já possui uma conta? Faça
                                o login.</p>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Signup;
