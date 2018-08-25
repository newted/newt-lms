import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

class Assignments extends Component {
  render() {
    const { fields, assignmentList } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Assignments</h3>
              <div className='items-container'>
                <Table
                  sizeClass='item-container--lg'
                  fields={ fields }
                  data={ assignmentList }
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses, assignments }) {
  const assignmentsByCourseObj = assignments.items
  const courseItems = courses.items
  // Table header fields: object key.
  // The keys are the table headings, the values are the corresponding column's
  // key for the data object
  let fields = {
    'Course': 'courseShortname',
    'Assignments': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }
  // array of assignment objects
  let assignmentList = []


  Object.keys(assignmentsByCourseObj).forEach((courseId) => {
    const assignmentsObj = assignmentsByCourseObj[courseId]
    Object.keys(assignmentsObj).forEach((assignmentId) => {
      const timestamp = assignmentsObj[assignmentId]['dueTimestamp']
      const date = timestamp.toDate()
      const dateString = date.toLocaleDateString()

      // Add assignment Id to assignment object
      assignmentsObj[assignmentId]['assignmentId'] = assignmentId

      // Add course shortname to assignment object
      assignmentsObj[assignmentId]['courseShortname'] = courseItems[courseId].shortname

      // Add dueDate Date object
      assignmentsObj[assignmentId]['dueDate'] = dateString

      assignmentList.push(assignmentsObj[assignmentId])
    })
  })

  // Order assignment array by closest due date to furtherest due date
  assignmentList.sort((a, b) => {
    const aDueDate = new Date(a.dueDate)
    const bDueDate = new Date(b.dueDate)

    return aDueDate - bDueDate
  })

  return {
    fields,
    assignmentList
  }
}

export default connect(mapStateToProps)(Assignments)
