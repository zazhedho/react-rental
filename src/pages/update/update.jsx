import React, { useEffect, useState } from 'react'
import style from './update.module.css'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Body, Flex } from '../../component/style/Body'
import withAuth from '../../helpers/withAuth'
import useApi from '../../helpers/useApi'
import Header from '../../component/header/header'

function Update() {
  const [data, setData] = useState({})
  const [vehicle, setVehicle] = useState({})

  const params = useParams()
  const api = useApi()
  const navigate = useNavigate()

  const onChangeInput = (e) => {
    e.preventDefault()
    const data = { ...vehicle }
    data[e.target.name] = e.target.value
    setVehicle(data)
  }

  const update = () => {
    api
      .requests({
        method: 'PUT',
        url: `/vehicles/${params.id}`,
        data: vehicle
      })
      .then(() => {
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getDataID = () => {
    api
      .requests({
        method: 'GET',
        url: `/vehicles`
      })
      .then((res) => {
        const { data } = res.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == params.id) {
            setData(data[i])
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDataID()
  }, [])

  return (
    <>
      <Header />
      <Body className={style.bgupdate}>
        <Container>
          <div className="sub">
            <span className={style.title}> Update Vehicle Here</span>
            <Link to="/admin">Back to Admin menu {'>'} </Link>
          </div>
          <Form>
            <Flex>
              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="name"
                name="name"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className={style.form}
                  type="text"
                  name="name"
                  defaultValue={data.name}
                />
              </Form.Group>

              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="location"
                name="location"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  className={style.form}
                  type="text"
                  name="location"
                  defaultValue={data.location}
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="description"
                name="description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className={style.form}
                  type="text"
                  name="description"
                  defaultValue={data.description}
                />
              </Form.Group>

              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="price"
                name="price"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className={style.form}
                  type="text"
                  name="price"
                  defaultValue={data.price}
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group
                onChange={onChangeInput}
                id="status"
                className={style.parent3}
              >
                <Form.Label>Status</Form.Label>
                <Form.Select className={style.form} name="status">
                  <option value="" selected disabled hidden>
                    {data.status}
                  </option>
                  <option>Available</option>
                  <option>No Prepayment</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="stock"
              >
                <Form.Label>Stock</Form.Label>
                <Form.Select className={style.form} name="stock">
                  <option value="" selected disabled hidden>
                    {data.stock}
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                onChange={onChangeInput}
                className={style.parent3}
                id="category"
              >
                <Form.Label>Category</Form.Label>
                <Form.Select className={style.form} name="category">
                  <option value="" selected disabled hidden>
                    {data.category}
                  </option>
                  <option>Cars</option>
                  <option>Motorbike</option>
                  <option>Bike</option>
                </Form.Select>
              </Form.Group>
            </Flex>

            <Flex>
              <Form.Group className={style.parent3}>
                <Button
                  onClick={update}
                  variant="warning"
                  className={style.btn2}
                >
                  Save
                </Button>{' '}
              </Form.Group>
            </Flex>
          </Form>
        </Container>
      </Body>
    </>
  )
}

export default withAuth(Update)
