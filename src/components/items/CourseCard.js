import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CourseCard extends Component {
  render() {
    const { courseId, courseShortName, courseName, courseIcon } = this.props

    return (
      <Link to={{
          pathname: `/course/${courseId}`
        }} className='course-card'>
          <div className='course-card--header'>
            <div className='course-card--icon'>
              { courseIcon }
            </div>
          </div>
          <div className='course-card-body'>
            <div className='course-card--shortname'>
              { courseShortName }
            </div>
            <div className='course-card--name'>
              { courseName }
            </div>
          </div>
      </Link>
    )
  }
}

function mapStateToProps({ courses }, { id }) {
  const courseId = id
  const courseShortName = courses[id].shortname
  const courseName = courses[id].name
  const courseIcon = courses[id].icon

  return {
    courseId,
    courseShortName,
    courseName,
    courseIcon
  }
}

export default connect(mapStateToProps)(CourseCard)
