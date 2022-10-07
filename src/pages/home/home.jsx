import React, { useState, useEffect } from 'react'
import style from './style.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../../component/header/header'
import { Body, Flex, Button } from '../../component/style/Body'
// import axios from 'axios'
import Footer from '../../component/footer/footer'

function Home() {
  // const [prod, setProd] = useState([])
  const [loc, setLoc] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate()

  const explore = () => {
    if (loc !== '') {
      navigate(`/location/${loc}`)
    }
    if (price !== '') {
      navigate(`/sortprice/${price}`)
    }
    if (type !== '') {
      navigate(`/sorttype/${type}`)
    }
    if (date !== '') {
      alert(`Hello ${date}`)
    }
  }

  return (
    <>
      <Header />
      <Body>
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
              <option value="Motorbike">Motorbike</option>
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
      <div className={style.container}>
        <div className="sub">
          <h2>popular in towns</h2>
          <a href="/vehicles">view all {'>'} </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
