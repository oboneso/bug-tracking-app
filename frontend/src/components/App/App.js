import React from 'react'
import * as Sentry from "@sentry/react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
// import Ticket from '../Ticket/Ticket'
import HomePage from '../../views/HomePage'
import TicketPage from '../../views/TicketPage'
import './App.css'

// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

const App = () => {
  return (
    <Router>
      <div className="grid">
      <button onClick={methodDoesNotExist}>Break the world</button>
        <Header />
        <Route path='/' component={HomePage} exact />
        <Route path='/ticket/:id' component={TicketPage} />
        <Footer />
      </div>
    </Router>
  )
}

export default Sentry.withProfiler(App);
