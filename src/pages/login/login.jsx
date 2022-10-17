import React, { useEffect, useState } from 'react'
import style from './login.module.css'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import { Body, Flex } from '../../component/style/Body'
import { useDispatch, useSelector } from 'react-redux'
import useApi from '../../helpers/useApi'
import { login } from '../../store/reducer/user'

function Login() {
  const [Users, setUsers] = useState({
    username: '',
    password: ''
  })

  const { isAuth } = useSelector((state) => state.users)
  const api = useApi()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const onChangeInput = (e) => {
    e.preventDefault()
    const data = { ...Users }
    data[e.target.name] = e.target.value
    setUsers(data)
  }

  const register = () => {
    navigate('/register')
  }

  const loginGoogle = () => {
    alert('success login with google')
  }

  const loginUser = () => {
    if (Users.username === '' || Users.password === '') {
      alert('semua kolom wajib diisi')
    } else if (Users.username != Users.username.toLowerCase()) {
      alert('username harus huruf kecil')
    } else if (Users.password.length < 8) {
      alert('input password minimal 8 karakter')
    } else {
      api
        .requests({
          method: 'POST',
          url: '/login',
          data: Users
        })
        .then((res) => {
          const { data } = res.data
          dispatch(login(data.token))
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

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
                    <Button
                      onClick={register}
                      variant="dark"
                      className={style.btn}
                    >
                      Sign Up
                    </Button>{' '}
                  </Form.Group>
                </Form>
              </Col>
              <Col lg>
                <Form>
                  <Form.Group className={style.line}>
                    <Form.Group className={style.parent2}>
                      <Form.Control
                        onChange={onChangeInput}
                        className={style.form}
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                      />
                    </Form.Group>

                    <Form.Group className={style.parent2}>
                      <Form.Control
                        onChange={onChangeInput}
                        className={style.form}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>

                    <Form.Group className={style.parent2}>
                      <Form.Text className={style.forgot2}>
                        Forgot password?
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className={style.parent2}>
                      <Button
                        onClick={loginUser}
                        variant="warning"
                        className={style.btn2}
                      >
                        Login
                      </Button>{' '}
                    </Form.Group>

                    <Form.Group className={style.parent2}>
                      <Button
                        onClick={loginGoogle}
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

export default Login
