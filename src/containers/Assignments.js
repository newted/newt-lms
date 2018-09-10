import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
// Helpers
import { formatDataForTable, statusDueDateSort } from '../utils/helpers'

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
    'Assignment': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }
  // array of assignment objects
  let assignmentList = formatDataForTable(
    assignmentsByCourseObj, courseItems, 'dueDate')

  // Order assignment array by closest due date to furtherest due date
  assignmentList.sort((a, b) => statusDueDateSort(a, b))

  return {
    fields,
    assignmentList
  }
}

export default connect(mapStateToProps)(Assignments)
