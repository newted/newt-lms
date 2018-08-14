import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class CourseCard extends Component {
  render() {
    const { courseId, courseShortName, courseName, courseIcon } = this.props

    return (
      <Link to={{
          pathname: `/courses/${courseId}`
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

CourseCard.PropTypes = {
  courseId: PropTypes.string.isRequired,
  courseShortName: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  courseIcon: PropTypes.element
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
