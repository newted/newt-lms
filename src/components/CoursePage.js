import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class CoursePage extends Component {
  render() {
    const { courseId } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            { courseId }
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps(_, props) {
  const { courseId } = props.match.params

  return {
    courseId
  }
}

export default connect(mapStateToProps)(CoursePage)
