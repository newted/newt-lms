// Frameworks/Libraries
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Panel from '../components/Panel'

class Dashboard extends Component {
  render() {
    const { assignmentsObj } = this.props
    console.log(assignmentsObj)

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

function mapStateToProps({ assignments }) {
  const assignmentsObj = assignments.items

  return {
    assignmentsObj
  }
}

export default connect(mapStateToProps)(Dashboard)
