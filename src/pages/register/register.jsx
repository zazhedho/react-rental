import style from './register.module.css'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import { Body, Flex } from '../../component/style/Body'
import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
      <>
        <Header />
        <Body className={style.bgregis}>
          <Container>
            <h1>Let's Explore The World</h1>
            <Flex>
              <Form className={style.parent}>
                <Form.Group>
                  <Form.Text className={style.forgot}>Have account?</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Link to={'/login'}>
                    <Button variant="dark" className={style.btn}>
                      Login
                    </Button>{' '}
                  </Link>
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className={style.line}>
                  <Form.Group className={style.parent2} id="name" name="name">
                    <Form.Control
                      className={style.form}
                      type="name"
                      name="name"
                      placeholder="Name"
                    />
                  </Form.Group>

                  <Form.Group className={style.parent2} id="email" name="email">
                    <Form.Control
                      className={style.form}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group
                    className={style.parent2}
                    id="password"
                    name="password"
                  >
                    <Form.Control
                      className={style.form}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Form.Group className={style.parent2}>
                    <Button variant="warning" className={style.btn2}>
                      Sign Up
                    </Button>{' '}
                  </Form.Group>

                  <Form.Group className={style.parent2}>
                    <Button
                      // onClick={alert('Oke Google')}
                      variant="light"
                      className={style.btn2}
                    >
                      Sign Up With Google
                    </Button>{' '}
                  </Form.Group>
                </Form.Group>
              </Form>
            </Flex>
          </Container>
        </Body>
        <Footer />
      </>
    )
  }
}

export default Register
