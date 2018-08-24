import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

class Assignments extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Assignments</h3>
              <div className='items-container'>
                <Table sizeClass='item-container--lg' />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Assignments
