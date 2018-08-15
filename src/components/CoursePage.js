import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './items/Navbar'
import Sidebar from './items/Sidebar'
import AssignmentSection from './items/AssignmentSection'

class CoursePage extends Component {
  render() {
    const { courseId, courseShortName, courseName } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='course-page-container'>
              <h3 className='header--2'>{ courseShortName } &ndash; { courseName}</h3>
              <div className='items-container'>
                <AssignmentSection courseId={ courseId } />
              </div>

            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses }, props) {
  const { courseId } = props.match.params
  const courseShortName = courses[courseId].shortname
  const courseName = courses[courseId].name

  return {
    courseId,
    courseShortName,
    courseName
  }
}

export default connect(mapStateToProps)(CoursePage)