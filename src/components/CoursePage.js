import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Components
import Navbar from './items/Navbar'
import Sidebar from './items/Sidebar'
import AssignmentAccordion from './items/AssignmentAccordion'

class CoursePage extends Component {
  render() {
    const { courseShortName, courseName } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='course-page-container'>
              <h3 className='header--2'>{ courseShortName } &ndash; { courseName}</h3>
              <div className='items-container'>
                <AssignmentAccordion/>
              </div>

            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

CoursePage.PropTypes = {
  courseId: PropTypes.string,
  courseShortName: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired
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
