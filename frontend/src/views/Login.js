import React, {useState} from 'react'

import * as UserRoutes from '../middleware/API/user/routes'
import {isEmail, isEmpty} from 'validator';
import {Button, Input, FormGroup, Form, Row, Col} from 'reactstrap';
import Navbar from "../components/Navbar";

const Login = (props) => {
    const [email, setEmail] = useState({value: '', isValid: true});
    const [password, setPassword] = useState({value: '', isValid: true});
    const [loginFailed, setLoginFailed] = useState(false);

    const login = (e) => {
        e.preventDefault();
        let user = {
            email: email.value,
            password: password.value
        };
        UserRoutes.login(user)
            .then(response => {
                console.log('TESTE', response);
                localStorage.setItem('USER', JSON.stringify(response));
                props.history.push('/app/home');
            }).catch(error => {
            console.log(error);
            window.alert(error.err);
            setLoginFailed(true);
        });
    };

    const handle = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if (e.target.name === 'email')
            setEmail({value, isValid: true});
        if (e.target.name === 'password')
            setPassword({value, isValid: true});
    };

    const redirectToSignup = () => {
        props.history.push('/signup');
    };

    return (
        <>
            <Navbar active={'login'}/>
            <div style={{textAlign: 'center', padding: 150}}>
                <h1>
                    Entrar
                </h1>
                <Form onSubmit={login} style={{marginTop: 30}}>
                    <Row>
                        <Col sm="12">
                            <FormGroup>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder={'Email'}
                                    value={email.value}
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
                                    placeholder={'Senha'}
                                    value={password.value}
                                    onChange={handle}
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
                    <div onClick={redirectToSignup}>
                        <p style={{textAlign: 'center', marginTop: 20, cursor: 'pointer'}}>Ainda não possui uma conta?
                            Registre-se aqui</p>
                    </div>
                </Form>
            </div>
        </>
    );
}


export default Login;
