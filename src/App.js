import { React, useEffect } from 'react'
import Orders from './Orders/Orders'
import Menu from './Menu/Menu'
import MenuDirector from './Redirect/MenuDirector'
import './const'
import OrderDetails from './Orders/OrderDetails';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/'>
      <div>
        <Route exact path="/" component={Menu} />
        <Route path="/menu" component={Menu} />
        <Route path="/orders" component={Orders} />
        <Route path="/details" component={OrderDetails} />
      </div>
    </BrowserRouter>
  )
}

export default App
