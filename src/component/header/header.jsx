import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/reducer/user'
import logo from './logo.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useApi from '../../helpers/useApi'

function Header(props) {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.users)
  const [data, setData] = useState([])
  const api = useApi()

  const getUsername = () => {
    api
      .requests({
        method: 'GET',
        url: `/users/profile`
      })
      .then((res) => {
        const { data } = res.data
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsername()
  }, [])

  return (
    <>
      <Container>
        <Navbar expand="lg" className={style.nav}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className={style.navbold}>
                {!isAuth ? (
                  <>
                    <Link to={'/'} className={style.a}>
                      Home
                    </Link>
                    <Link to={'/vehicles'} className={style.a}>
                      Vehicle Type
                    </Link>
                    <Link to={'/histories'} className={style.a}>
                      History
                    </Link>
                    <Link to={'/about'} className={style.a}>
                      About
                    </Link>

                    <Link to={'/login'} className={style.a}>
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className={style.button1}
                      >
                        Login
                      </Button>{' '}
                    </Link>
                    <Link to={'/register'} className={style.a}>
                      <Button
                        variant="warning"
                        size="sm"
                        className={style.button1}
                      >
                        Register
                      </Button>{' '}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={'/'} className={style.a}>
                      Home
                    </Link>
                    <Link to={'/vehicles'} className={style.a}>
                      Vehicle Type
                    </Link>
                    <Link to={'/histories'} className={style.a}>
                      History
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/zaidus-zhuhur/"
                      className={style.a}
                    >
                      About
                    </a>
                    <Link to={'/'} className={style.a}>
                      <Button
                        onClick={() => dispatch(logout())}
                        variant="outline-dark"
                        size="sm"
                        className={style.button1}
                      >
                        Hi,
                        <span> {data.username} </span>
                      </Button>{' '}
                    </Link>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default Header
