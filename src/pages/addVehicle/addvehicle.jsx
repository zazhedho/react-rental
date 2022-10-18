import React, { useEffect, useState } from 'react'
import style from './addvehicle.module.css'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { Body, Flex } from '../../component/style/Body'
import withAuth from '../../helpers/withAuth'
import useApi from '../../helpers/useApi'
import Header from '../../component/header/header'

function AddVehicle() {
  const [data, setData] = useState({})

  const api = useApi()
  const navigate = useNavigate()

  const onChangeInput = (e) => {
    e.preventDefault()
    const tmpdata = { ...data }
    tmpdata[e.target.name] = e.target.value
    setData(tmpdata)
  }

  const { isAuth } = useSelector((state) => state.users)
  useEffect(() => {
    if (isAuth) {
      navigate('/add')
    }
  }, [isAuth])

  const onChangeFile = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file) {
      const tmpdata = { ...data }
      tmpdata['image'] = file
      setData(tmpdata)
    }
  }

  const postData = () => {
    const formData = new FormData()
    for (const key in data) {
      formData.append(`${key}`, data[key])
    }

    api
      .requests({
        method: 'POST',
        url: '/vehicles',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
      })
      .then((res) => {
        navigate('/admin')
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <>
      <Header />
      <Body className={style.bgadd}>
        <Container>
          <div className="sub">
            <span className={style.title}> Add New Vehicle Here</span>
            <Link to="/admin">Back to Admin menu {'>'} </Link>
          </div>
          <Form>
            <Flex>
              <Form.Group className={style.parent3} id="name" name="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group
                className={style.parent3}
                id="location"
                name="location"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="location"
                  placeholder="Location"
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group
                className={style.parent3}
                id="description"
                name="description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="description"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group className={style.parent3} id="price" name="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="number"
                  name="price"
                  placeholder="Price"
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group className={style.parent3} id="status" name="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="status"
                  placeholder="Status"
                />
              </Form.Group>

              <Form.Group className={style.parent3} id="stock" name="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="number"
                  name="stock"
                  placeholder="Stock"
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group
                className={style.parent3}
                id="category"
                name="category"
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="category"
                  placeholder="Category"
                />
              </Form.Group>

              <Form.Group className={style.parent3} id="rating" name="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  onChange={onChangeInput}
                  className={style.form}
                  type="text"
                  name="rating"
                  placeholder="Rating"
                />
              </Form.Group>
            </Flex>
            <Flex>
              <Form.Group className={style.parent3} id="image" name="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  onChange={onChangeFile}
                  className={style.form}
                  type="file"
                  name="image"
                />
              </Form.Group>
            </Flex>

            <Flex>
              <Form.Group className={style.parent3}>
                <Button
                  onClick={postData}
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

export default withAuth(AddVehicle)
