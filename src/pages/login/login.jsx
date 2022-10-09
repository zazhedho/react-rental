import React, { Component } from 'react'
import style from './login.module.css'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import { Body, Flex } from '../../component/style/Body'

export class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <Body className={style.bglogin}>
          <Container>
            <h1>Let's Explore The World</h1>
            <Flex>
              <Row>
                <Col lg>
                  <Form className={style.parent}>
                    <Form.Group>
                      <Form.Text className={style.forgot}>
                        Don't have account?
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Link to={'/register'}>
                        <Button variant="dark" className={style.btn}>
                          Sign Up
                        </Button>{' '}
                      </Link>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg>
                  <Form>
                    <Form.Group className={style.line}>
                      <Form.Group className={style.parent2}>
                        <Form.Control
                          className={style.form}
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </Form.Group>

                      <Form.Group className={style.parent2}>
                        <Form.Control
                          className={style.form}
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </Form.Group>

                      <Form.Group className={style.parent2}>
                        <Form.Text className={style.forgot2}>
                          Forgot password?
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className={style.parent2}>
                        <Button variant="warning" className={style.btn2}>
                          Login
                        </Button>{' '}
                      </Form.Group>

                      <Form.Group className={style.parent2}>
                        <Button
                          // onClick={alert('Halo Google')}
                          variant="light"
                          className={style.btn2}
                        >
                          Login With Google
                        </Button>{' '}
                      </Form.Group>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Flex>
          </Container>
        </Body>
        <Footer />
      </>
    )
  }
}

export default Login
