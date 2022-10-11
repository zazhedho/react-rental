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

  getData = async () => {
    try {
      const { data: detail } = await axios.get(
        process.env.REACT_APP_BASE_URL + '/vehicles'
      )
      const dataVehicle = detail.data
      this.setState({ detail: dataVehicle })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
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
            {this.state.detail.map((v, k) => {
              if (v.name == this.props.match.params.name) {
                return (
                  <>
                    <img src={v.image} alt={v.name} className={style.image} />
                    <div className={style.rightside}>
                      <h4>{v.name}</h4>
                      <h5>{v.location}</h5>

                      <div className={style.status}>
                        <p className={style.ava}>{v.status}</p>
                      </div>

                      <div className={style.desc}>
                        <p>Capacity: {v.description}</p>
                        <p>Type: {v.category}</p>
                        <p>Reservation : {v.description} </p>
                      </div>

                      <p className={style.price}>Rp. {v.price}/day</p>
                    </div>
                    <Row xs={1} md={2}>
                      {Array.from({ length: 2 }).map(() => (
                        <Col>
                          <Card>
                            <Card.Img
                              className={style.dispimage}
                              variant="top"
                              src={v.image}
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
                      <h3>{v.stock}</h3>
                      <Button
                        disabled
                        variant="outline"
                        size="sm"
                        className={style.button1}
                      >
                        -
                      </Button>{' '}
                    </div>
                  </>
                )
              }
            })}

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
