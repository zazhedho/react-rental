import React, { Component } from 'react'
import style from './home.module.css'
import { Container } from 'react-bootstrap'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Card from '../../component/cards/cards'
import { Body, Flex, Button } from '../../component/style/Body'
import axios from 'axios'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  getPopularVehicle = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + '/vehicles/popular'
      )
      const dataPopularVehicles = data.data
      this.setState({ data: dataPopularVehicles })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getPopularVehicle()
  }

  render() {
    return (
      <>
        <Header />
        <Body className={style.bghome}>
          <Container>
            <h1>Explore and Travel</h1>
            <p>Vehicle Finder</p>
            <Flex>
              <select name="location" id="location">
                <option value="" selected disabled hidden>
                  Location
                </option>
                <option value="Bali">Bali</option>
                <option value="Lombok">Lombok</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Malang">Malang</option>
                <option value="Jakarta">Jakarta</option>
              </select>
              <select name="cars" id="cars">
                <option value="" selected disabled hidden>
                  Type
                </option>
                <option value="Cars">Cars</option>
                <option value="Motorbike">Motorbike</option>
                <option value="Bike">Bike</option>
              </select>
            </Flex>

            <Flex>
              <select name="price" id="price">
                <option value="" selected disabled hidden>
                  Payment
                </option>
                <option value="50000"> {'>'} 50.000 </option>
                <option value="100000"> {'>'} 100.000 </option>
                <option value="200000"> {'>'} 200.000 </option>
                <option value="400000"> {'>'} 400.000 </option>
              </select>
              <select name="date" id="date">
                <option value="" selected disabled hidden>
                  Date
                </option>
                <option value="Januari">Januari</option>
                <option value="Februari">Februari</option>
                <option value="Maret">Maret</option>
                <option value="April">April</option>
                <option value="Mei">Mei</option>
                <option value="Juni">Juni</option>
                <option value="Juli">Juli</option>
                <option value="Agustus">Agustus</option>
                <option value="September">September</option>
                <option value="Oktober">Oktober</option>
                <option value="November">November</option>
                <option value="Desember">Desember</option>
              </select>
            </Flex>
            <Button>explore</Button>
          </Container>
        </Body>

        <div className={style.container}>
          <div className="sub">
            <h2>popular in towns</h2>
            <a href="/vehicles">view all {'>'} </a>
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

          <div className={style.sub}>
            <h2>testimonials</h2>
          </div>

          <div className="testimoni">
            <div>
              "it was the right decision to rent vehicle here, I spent less
              money and enjoy the trip. It was an amazing experience to have a
              ride for wildlife trip!"
              <span className="name">
                <br />
                <br /> Zaidus Zhuhur
              </span>
              <br /> Founder Mobile Legends
            </div>
            <Card backdrop="https://res.cloudinary.com/zazh/image/upload/v1665240114/image/1665240068872_gruaoh.jpg" />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
