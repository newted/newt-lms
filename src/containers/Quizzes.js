import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

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

  let quizList = []

  Object.keys(quizzesByCourseObj).forEach((courseId) => {
    const quizObj = quizzesByCourseObj[courseId]
    Object.keys(quizObj).forEach((quizId) => {
      const timestamp = quizObj[quizId]['dueTimestamp']
      const date = timestamp.toDate()
      const dateString = date.toLocaleDateString()

      quizObj[quizId]['id'] = quizId
      quizObj[quizId]['courseShortname'] = courseItems[courseId].shortname
      quizObj[quizId]['dueDate'] = dateString

      quizList.push(quizObj[quizId])
    })
  })

  quizList.sort((a, b) => {
    const aDueDate = new Date(a.dueDate)
    const bDueDate = new Date(b.dueDate)
    const aStatus = a.status
    const bStatus = b.status

    // sort by status
    if (aStatus === bStatus) {
      // second-order sort (if status is same): sort by due date
      return aDueDate - bDueDate
    } else {
      if (aStatus === "Incomplete") {
        return -1
      } else if (aStatus === "Complete") {
        return 1
      } else {
        return 0
      }
    }
  })

  return {
    fields,
    quizList
  }
}

export default connect(mapStateToProps)(Quizzes)
