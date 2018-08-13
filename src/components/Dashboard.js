// Frameworks/Libraries
import React, { Component, Fragment } from 'react'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            Dashboard
          </div>    
        </section>
      </Fragment>
    )
  }
}

export default Dashboard
