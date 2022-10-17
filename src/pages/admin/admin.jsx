import React, { useState, useEffect } from 'react'
import style from './admin.module.css'
import useApi from '../../helpers/useApi'
import { Link } from 'react-router-dom'
import { Button, Container, Table } from 'react-bootstrap'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import { Body } from '../../component/style/Body'
import withAuth from '../../helpers/withAuth'

function Admin() {
  const [prod, setProd] = useState([])
  const api = useApi()

  const getVehicle = () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles'
      })
      .then((res) => {
        const { data } = res.data
        setProd(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteVehicle = (id) => {
    api
      .requests({
        method: 'DELETE',
        url: `/vehicles/${id}`
      })
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Component DidMount
  useEffect(() => {
    getVehicle()
  }, [])

  return (
    <>
      <Header />
      <Body>
        <Container>
          <div className={style.container}>
            <div className="sub">
              <h2>Data Vehicle</h2>
              <Link to="/add">Add vehicle here {'>'} </Link>
            </div>

            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {prod.map((v, k) => {
                  return (
                    <tr>
                      <td>{k + 1}</td>
                      <td>{v.name}</td>
                      <td>{v.location}</td>
                      <td>{v.description}</td>
                      <td>{v.price}</td>
                      <td>{v.status}</td>
                      <td>{v.stock}</td>
                      <td>{v.category}</td>
                      <td>{v.rating}</td>
                      <td>
                        <img src={v.image} width="100px" height="100px" />
                      </td>
                      <td>
                        <Link to={`/update/` + v.id} variant="warning">
                          <Button>Update</Button>
                        </Link>
                        <Button
                          onClick={() => {
                            if (
                              window.confirm(
                                'Are you sure you want to delete selected asset?'
                              )
                            ) {
                              deleteVehicle(v.id)
                            }
                          }}
                        >
                          {' '}
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </Body>
      <Footer />
    </>
  )
}

export default withAuth(Admin)
