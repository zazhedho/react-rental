import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import style from './vehicle.module.css'
import useApi from '../../helpers/useApi'
// import withAuth from "../../helpers/withAuth";
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Card from '../../component/cards/cards'
import { Link } from 'react-router-dom'

function Vehicle() {
  const [prod, setProd] = useState([])
  const [cars, setCars] = useState([])
  const [motorcycle, setMotorcycle] = useState([])
  const [bike, setBike] = useState([])
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const api = useApi()

  const goSearch = () => {
    navigate(`/search/${name}`)
  }

  const getPopularVehicle = () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles/popular'
      })
      .then((res) => {
        const { data } = res.data
        setProd(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getCars = () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles/category?category=cars'
      })
      .then((res) => {
        const { data } = res.data
        setCars(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMotorcycle = () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles/category?category=motor'
      })
      .then((res) => {
        const { data } = res.data
        setMotorcycle(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getBike = () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles/category?category=bike'
      })
      .then((res) => {
        const { data } = res.data
        setBike(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // ComponentDidMount
  useEffect(() => {
    getPopularVehicle()
    getCars()
    getMotorcycle()
    getBike()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className={style.container}>
          <div className={style.search}>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="vehicle name"
                  />
                </Col>

                <Col>
                  <Button
                    onClick={goSearch}
                    variant="warning"
                    size="sm"
                    className={style.button1}
                  >
                    Search
                  </Button>{' '}
                </Col>
              </Row>
            </Form>
          </div>
          <div className="sub">
            <h2>popular in towns</h2>
            <Link to={'/vehicles/vehicle'}>view all {'>'} </Link>
          </div>

          <div className="content">
            {prod.map((v, k) => {
              if (k < 4) {
                return (
                  <Card
                    key={k}
                    id={v.vehicle_id}
                    title={v.name}
                    image={v.image}
                    city={v.location}
                  />
                )
              }
            })}
          </div>

          <div className="sub">
            <h2>Cars</h2>
            <Link to={'/vehicles/cars'}>view all {'>'} </Link>
          </div>

          <div className="content">
            {cars.map((v, k) => {
              if (k < 4) {
                return (
                  <Card
                    key={k}
                    id={v.vehicle_id}
                    title={v.name}
                    image={v.image}
                    city={v.location}
                  />
                )
              }
            })}
          </div>

          <div className="sub">
            <h2>Motorcycles</h2>
            <Link to={'/vehicles/motorcycle'}>view all {'>'} </Link>
          </div>

          <div className="content">
            {motorcycle.map((v, k) => {
              if (k < 4) {
                return (
                  <Card
                    key={k}
                    id={v.vehicle_id}
                    title={v.name}
                    image={v.image}
                    city={v.location}
                  />
                )
              }
            })}
          </div>

          <div className="sub">
            <h2>Bike</h2>
            <Link to={'/vehicles/bike'}>view all {'>'} </Link>
          </div>

          <div className="content">
            {bike.map((v, k) => {
              if (k < 4) {
                return (
                  <Card
                    key={k}
                    id={v.vehicle_id}
                    title={v.name}
                    image={v.image}
                    city={v.location}
                  />
                )
              }
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Vehicle
