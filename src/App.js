import { React, useEffect } from 'react'
import Orders from './Orders/Orders'
import Menu from './Menu/Menu'
import MenuDirector from './Redirect/MenuDirector'
import './const'
import OrderDetails from './Orders/OrderDetails';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Route exact path="/" component={Menu} />
        <Route path="/orders" component={Orders} />
        <Route path="/details" component={OrderDetails} />
      </div>
    </HashRouter>
  )
}

export default App
