// Frameworks/Libraries
import React, { Component, Fragment } from 'react'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Sidebar />
        <section class='container'>
          Dashboard
        </section>
      </Fragment>
    )
  }
}

export default Dashboard
