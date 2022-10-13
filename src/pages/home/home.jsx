import React, { useState, useEffect } from 'react'
import style from './home.module.css'
import useApi from '../../helpers/useApi'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
// import Cards from '../../component/cards/cards'
import Card from '../../component/cards/cards'
import { Body, Flex, Button } from '../../component/style/Body'

function Home() {
  const [prod, setProd] = useState([])
  const [loc, setLoc] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate()
  const api = useApi()

  const explore = () => {
    if (loc !== '') {
      navigate(`/location/${loc}`)
    }
    if (price !== '') {
      navigate(`/price/${price}`)
    }
    if (type !== '') {
      navigate(`/type/${type}`)
    }
    if (date !== '') {
      alert(`Hello ${date}`)
    }
  }

  const getPopularVehicle = async () => {
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

  // Component DidMount
  useEffect(() => {
    getPopularVehicle()
  }, [])

  return (
    <>
      <Header />
      <Body className={style.bghome}>
        <Container>
          <h1>Explore and Travel</h1>
          <p>Vehicle Finder</p>
          <Flex>
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              name="location"
              id="location"
            >
              <option value="" selected disabled hidden>
                Location
              </option>
              <option value="Bali">Bali</option>
              <option value="Lombok">Lombok</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Malang">Malang</option>
              <option value="Jakarta">Jakarta</option>
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="cars"
              id="cars"
            >
              <option value="" selected disabled hidden>
                Type
              </option>
              <option value="Cars">Cars</option>
              <option value="Motorbike">Motorcycle</option>
              <option value="Bike">Bike</option>
            </select>
          </Flex>

          <Flex>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              id="price"
            >
              <option value="" selected disabled hidden>
                Payment
              </option>
              <option value="50000"> {'>'} 50.000 </option>
              <option value="100000"> {'>'} 100.000 </option>
              <option value="200000"> {'>'} 200.000 </option>
              <option value="400000"> {'>'} 400.000 </option>
            </select>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              name="date"
              id="date"
            >
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
          <Button onClick={explore}>explore</Button>
        </Container>
      </Body>
      <Container>
        <div className={style.container}>
          <div className="sub">
            <h2>popular in towns</h2>
            <Link to="/vehicles">view all {'>'} </Link>
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
      </Container>
      <Footer />
    </>
  )
}

export default Home
