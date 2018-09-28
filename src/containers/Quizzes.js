import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
// Helpers
import { formatDataForTable, statusDueDateSort } from '../utils/helpers'

class Quizzes extends Component {
  state = {
    showCompleted: false
  }

  handleShowCompleted = (e) => {
    e.preventDefault()

    this.setState((prevState) => ({
      showCompleted: !prevState.showCompleted
    }))
  }

  render() {
    const { authedUser, fields, quizList } = this.props
    const { showCompleted } = this.state

    if (!authedUser.exists) {
      return <Redirect to='/login' />
    }

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Quizzes</h3>
              <div className='items-container'>
                <div className='item-container--lg'>
                  <div className='button-container justify-right'>
                    <button
                      className={'button show-completed-btn ' + (showCompleted ? 'ltgreen-btn' : '')}
                      onClick={ this.handleShowCompleted }>
                        Show Completed
                    </button>
                  </div>
                </div>
                <Table
                  sizeClass='item-container--lg'
                  fields={ fields }
                  data={ quizList }
                  showCompleted={ showCompleted }
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, courses, quizzes}) {
  const quizzesByCourseObj = quizzes.items
  const courseItems = courses.items

  let fields = {
    'Course': 'courseShortname',
    'Quiz': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }

  let quizList = formatDataForTable(
    quizzesByCourseObj, courseItems, 'dueDate', 'large')

  quizList.sort((a, b) => statusDueDateSort(a, b))

  return {
    authedUser,
    fields,
    quizList
  }
}

export default connect(mapStateToProps)(Quizzes)
