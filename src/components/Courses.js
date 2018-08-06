import React, { Component, Fragment } from 'react'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <section className='content-container'>
          <Navbar />
          Courses
        </section>
      </Fragment>
    )
  }
}

export default Courses
