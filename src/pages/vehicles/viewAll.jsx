import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import style from './vehicle.module.css'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Card from '../../component/cards/cards'
import axios from 'axios'

export class AllVehicle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  getAllVehicle = async () => {
    try {
      const { data } = await axios.get(
        this.props.match.params.category == 'all'
          ? process.env.REACT_APP_BASE_URL + '/vehicles'
          : process.env.REACT_APP_BASE_URL +
              '/vehicles/category?category=' +
              this.props.match.params.category
      )
      const dataAllVehicles = data.data
      this.setState({ data: dataAllVehicles })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getAllVehicle()
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <h1>All Vehicle</h1>
          <div className={style.container}>
            <div className="content">
              {this.state.data.map((v, k) => {
                return (
                  <Card
                    key={k}
                    id={v.vehicle_id}
                    title={v.name}
                    image={v.image}
                    city={v.location}
                  />
                )
              })}
            </div>
          </div>
        </Container>
        <Footer />
      </>
    )
  }
}

export default AllVehicle
