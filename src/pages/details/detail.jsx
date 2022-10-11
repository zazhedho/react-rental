import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import style from './detail.module.css'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import axios from 'axios'

export class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: []
    }
  }

  getDataName = async () => {
    try {
      const { data: detail } = await axios.get(
        process.env.REACT_APP_BASE_URL +
          '/vehicles/search?name=' +
          this.props.match.params.name
      )
      const dataVehicle = detail.data
      this.setState({ data: dataVehicle })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getDataName()
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="sub">
            <h2>Detail</h2>
          </div>

          <div className={style.content}>
            <img
              src={this.state.detail.image}
              alt={this.state.detail.name}
              className={style.image}
            />
            <div className={style.rightside}>
              <h4>{this.state.detail.name}</h4>
              <h5>{this.state.detail.location}</h5>

              <div className={style.status}>
                <p className={style.ava}>{this.state.detail.status}</p>
              </div>

              <div className={style.desc}>
                <p>Capacity: {this.state.detail.description}</p>
                <p>Type: {this.state.detail.category}</p>
                <p>Reservation : {this.state.detail.description} </p>
              </div>

              <p className={style.price}>Rp. {this.state.detail.price}/day</p>
            </div>
            <Row xs={1} md={2}>
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img
                      className={style.dispimage}
                      variant="top"
                      src={this.state.detail.image}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
            <div className={style.stock}>
              <Button
                disabled
                variant="warning"
                size="sm"
                className={style.button1}
              >
                +
              </Button>{' '}
              <h3>{this.state.detail.stock}</h3>
              <Button
                disabled
                variant="outline"
                size="sm"
                className={style.button1}
              >
                -
              </Button>{' '}
            </div>
            <div className={style.newdiv}>
              <Button variant="warning" size="sm" className={style.btn2}>
                Reservation
              </Button>{' '}
              <Button variant="dark" size="sm" className={style.btn3}>
                Like
              </Button>{' '}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Details
