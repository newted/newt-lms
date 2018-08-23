import React, { Component } from 'react'
import { connect } from 'react-redux'

const NoInfo = ({ title }) => (
  <div className='item-container--sm'>
    <h3 className='header--3'>{ title }</h3>
    <div className='panel'>
      <div className='panel-body'>
        You don't have any { title.toLowerCase() }
      </div>
    </div>
  </div>
)

class Panel extends Component {
  render() {
    const { title, sizeClass, infoObj } = this.props

    if (Object.keys(infoObj).length === 0) {
      return <NoInfo title={ title } />
    }

    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <div className='panel'>
          { Object.keys(infoObj).map((id) => (
            <div className='panel-body' key={ id }>
              <div>
                { infoObj[id].text }
              </div>
              <div>
                { infoObj[id].details}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(
  { courses, announcements, quizzes, grades }, { title, type, courseId, list, sizeClass }) {
  let infoList = list
  let infoObj = {}

  switch(type) {
    case 'announcements':
      infoObj = createInfoObject(infoList, announcements)

      return {
        title,
        courseId,
        sizeClass,
        infoObj
      }
    case 'quizzes':
      infoObj = createInfoObject(infoList, quizzes)

      return {
        title,
        courseId,
        sizeClass,
        infoObj
      }
    case 'grades':
      infoList = courses[courseId].grades
      infoObj = createInfoObject(infoList, grades)

      // Populate text field from quizzes data
      Object.keys(infoObj).forEach((id) => {
        infoObj[id].text = quizzes[infoObj[id].quizId].text
      })

      return {
        title,
        courseId,
        sizeClass,
        infoObj
      }
    default:
      return {
        title,
        courseId,
        sizeClass,
        infoObj: {}
      }
  }

  function createInfoObject(infoList, data) {
    infoObj = {}

    if (infoList.length > 0) {
      infoList.forEach((docRef) => {
        infoObj[docRef.id] = data.items[docRef.id]
      })
    }
    return infoObj
  }
}

export default connect(mapStateToProps)(Panel)
