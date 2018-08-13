import React, { Component, Fragment } from 'react'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class CoursePage extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            Course Page
          </div>
        </section>
      </Fragment>
    )
  }
}

export default CoursePage
