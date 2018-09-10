import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
// Helpers
import { formatDataForTable, statusDueDateSort } from '../utils/helpers'

class Quizzes extends Component {
  render() {
    const { fields, quizList } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Quizzes</h3>
              <div className='items-container'>
                <Table
                  sizeClass='item-container--lg'
                  fields={ fields }
                  data={ quizList }
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses, quizzes}) {
  const quizzesByCourseObj = quizzes.items
  const courseItems = courses.items

  let fields = {
    'Course': 'courseShortname',
    'Quiz': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }

  let quizList = formatDataForTable(quizzesByCourseObj, courseItems, 'dueDate')

  quizList.sort((a, b) => statusDueDateSort(a, b))

  return {
    fields,
    quizList
  }
}

export default connect(mapStateToProps)(Quizzes)
