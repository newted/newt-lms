import React, { Component } from 'react'
import { connect } from 'react-redux'

class CourseCard extends Component {
  render() {
    const { courseShortName, courseName } = this.props

    return (
      <div className='course-card'>
        <div className='course-card-shortname'>
          { courseShortName }
        </div>
        <div className='course-card-name'>
          { courseName }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ courses }, { id }) {
  const courseShortName = courses[id].shortname
  const courseName = courses[id].name

  return {
    courseShortName,
    courseName
  }
}

export default connect(mapStateToProps)(CourseCard)
