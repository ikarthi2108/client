import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Create a data object to send to the server
        const userData = {
            email,
            password,
        };

        axios
            .post('http://localhost:3001/login', userData)
            .then((response) => {
                // Handle a successful login, for example, store user information in Redux
                console.log('User logged in successfully', response.data);
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                // Handle login error, show an error message, etc.
                console.error('Login failed', error);
            });
    };

    return (
        <Container className="mt-5">
            <h2>Login</h2>
            <Form>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row className="mt-3">
                <Col xs={12}>
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register">Register</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
