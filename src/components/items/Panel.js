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
    console.log(infoObj)

    if (Object.keys(infoObj).length === 0) {
      return <NoInfo title={ title } />
    }

    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <div className='panel'>
          { Object.keys(infoObj).map((id) => (
            <div className='panel-body' key={ id }>
              { infoObj[id].text }
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ courses, announcements, quizzes }, { title, type, courseId, sizeClass }) {
  let infoList = []
  let infoObj = {}

  switch(type) {
    case 'announcements':
      infoList = courses[courseId].announcements
      infoObj = {}

      if (infoList.length > 0) {
        infoList.forEach((id) => {
          infoObj[id] = announcements[id]
        })
      }

      return {
        title,
        courseId,
        sizeClass,
        infoObj
      }
    case 'quizzes':
      infoList = courses[courseId].quizzes
      infoObj = {}

      if (infoList.length > 0) {
        infoList.forEach((id) => {
          infoObj[id] = quizzes[id]
        })
      }

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
}

export default connect(mapStateToProps)(Panel)
