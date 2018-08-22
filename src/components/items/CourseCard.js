import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// Other
import { icons } from '../../utils/icons'

class CourseCard extends Component {
  render() {
    const { courseId, courseShortName, courseName, courseIcon } = this.props
    console.log(courseIcon)

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

function mapStateToProps({ courses }, { id }) {
  const courseId = id
  const courseShortName = courses.items[id].shortname
  const courseName = courses.items[id].name
  const courseIcon = icons.byDepartment[courses.items[id].department]

  return {
    courseId,
    courseShortName,
    courseName,
    courseIcon
  }
}

export default connect(mapStateToProps)(CourseCard)
