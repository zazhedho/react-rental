import React, { useState, useEffect } from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useApi from '../../helpers/useApi'
import style from './detail.module.css'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

function Details() {
  const [prod, setProd] = useState([])
  const [vehicle, setVehicle] = useState({
    quantity: 0
  })

  const params = useParams()
  const api = useApi()

  const notice = () => {
    alert('https://www.linkedin.com/in/zaidus-zhuhur/')
  }

  const calcPlus = () => {
    const data = { ...vehicle }
    vehicle.quantity += 1
    data.quantity = vehicle.quantity
    setVehicle(data)
  }

  const calcMin = () => {
    const data = { ...vehicle }
    if (vehicle.quantity === 0) {
      data.quantity = vehicle.quantity
      setVehicle(data)
    } else {
      vehicle.quantity -= 1
      data.quantity = vehicle.quantity
      setVehicle(data)
    }
  }

  const getVehicleName = () => {
    api
      .requests({
        method: 'GET',
        url: `/vehicles/search?name=${params.name}`
      })
      .then((res) => {
        const { data } = res.data
        setProd(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getVehicleName()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="sub">
          <h2>Detail</h2>
        </div>

        <div className={style.content}>
          {prod.map((v, k) => {
            if (v.name == params.name) {
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
                      <p>Capacity : {v.description}</p>
                      <p>Type : {v.category}</p>
                      <p>Reservation : {v.description} </p>
                      <p>Stock : {v.stock} </p>
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
                      onClick={calcPlus}
                      variant="warning"
                      size="sm"
                      className={style.button1}
                    >
                      +
                    </Button>{' '}
                    <h3>{vehicle.quantity}</h3>
                    <Button
                      onClick={calcMin}
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
            <Button
              onClick={notice}
              variant="dark"
              size="sm"
              className={style.btn1}
            >
              Chat Admin
            </Button>{' '}
            <Button
              onClick={notice}
              variant="warning"
              size="sm"
              className={style.btn2}
            >
              Reservation
            </Button>{' '}
            <Button
              onClick={notice}
              variant="dark"
              size="sm"
              className={style.btn3}
            >
              Like
            </Button>{' '}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Details
