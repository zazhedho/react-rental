import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './pages/details/detail'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Vehicle from './pages/vehicles/vehicle'
import AllVehicle from './pages/vehicles/viewAll'

function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/vehicles" component={Vehicle} />
        <Route exact path="/vehicles/:category" component={AllVehicle} />
        <Route exact path="/detail/:name" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default router
