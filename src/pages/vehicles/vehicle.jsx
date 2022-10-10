import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import style from './vehicle.module.css'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Card from '../../component/cards/cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Vehicle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      cars: [],
      motorcycle: [],
      bike: []
    }
  }

  getPopularVehicle = async () => {
    try {
      const { data } = await axios.get(
        'https://go-vehiclerent.herokuapp.com/api/v1/vehicles/popular'
      )
      const dataPopularVehicles = data.data
      this.setState({ data: dataPopularVehicles })
    } catch (error) {
      console.log(error)
    }
  }

  getCars = async () => {
    try {
      const { data: cars } = await axios.get(
        'https://go-vehiclerent.herokuapp.com/api/v1/vehicles/category?category=cars'
      )
      const dataCars = cars.data
      this.setState({ cars: dataCars })
    } catch (error) {
      console.log(error)
    }
  }

  getMotorcycle = async () => {
    try {
      const { data: motorcycle } = await axios.get(
        'https://go-vehiclerent.herokuapp.com/api/v1/vehicles/category?category=motor'
      )
      const dataMotorcycle = motorcycle.data
      this.setState({ motorcycle: dataMotorcycle })
    } catch (error) {
      console.log(error)
    }
  }

  getBike = async () => {
    try {
      const { data: bike } = await axios.get(
        'https://go-vehiclerent.herokuapp.com/api/v1/vehicles/category?category=bike'
      )
      const dataBike = bike.data
      this.setState({ bike: dataBike })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getPopularVehicle()
    this.getCars()
    this.getMotorcycle()
    this.getBike()
  }

  render() {
    return (
      <>
        <Header />
        <div className={style.container}>
          <div className={style.search}>
            <Form>
              <Row>
                <Col>
                  <Form.Control type="name" placeholder="Vehicle Name" />
                </Col>

                <Col>
                  <Link to={'vehicles/search?name='}>
                    <Button
                      variant="warning"
                      size="sm"
                      className={style.button1}
                    >
                      Search
                    </Button>{' '}
                  </Link>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="sub">
            <h2>popular in towns</h2>
            <a href="#viewall">view all {'>'} </a>
          </div>

          <div className="content">
            {this.state.data.map((v, k) => {
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
            <a href="#viewall">view all {'>'} </a>
          </div>

          <div className="content">
            {this.state.cars.map((v, k) => {
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
            <a href="#viewall">view all {'>'} </a>
          </div>

          <div className="content">
            {this.state.motorcycle.map((v, k) => {
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
            <a href="#viewall">view all {'>'} </a>
          </div>

          <div className="content">
            {this.state.bike.map((v, k) => {
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
        <Footer />
      </>
    )
  }
}

export default Vehicle
