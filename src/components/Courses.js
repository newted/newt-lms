import React, { Component, Fragment } from 'react'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Sidebar />
        <section class='container'>
          Courses
        </section>
      </Fragment>
    )
  }
}

export default Courses
