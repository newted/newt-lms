import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'

const NoAssignments = () => (
  <div className='item-container--sm'>
    <h3 className='header--3'>Assignments</h3>
    <div className='panel'>
      <div className='panel-body'>
        You don't have any assignments
      </div>
    </div>
  </div>
)

class AssignmentSection extends Component {
  render() {
    const { assignmentObj } = this.props

    if (Object.keys(assignmentObj).length === 0) {
      return <NoAssignments/>
    }

    return(
      <div className='item-container--sm'>
        <h3 className='header--3'>Assignments</h3>
        <Accordion className='accordion' accordion={ false }>
          { Object.keys(assignmentObj).map((assignmentId) => (
            <AccordionItem className='accordion--item' key={ assignmentId }>
              <AccordionItemTitle className='accordion--title'>
                <h3>{ assignmentObj[assignmentId].name }</h3>
              </AccordionItemTitle>
              <AccordionItemBody
                className='accordion--body'
                hideBodyClassName='accordion--body-hidden'>
                  <p>{ assignmentObj[assignmentId].details }</p>
              </AccordionItemBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
}

function mapStateToProps({ courses, assignments }, { courseId }) {
  const assignmentList = courses[courseId].assignments
  const assignmentObj = {}

  if (assignmentList.length > 0) {
    assignmentList.forEach((assgnId) => {
      assignmentObj[assgnId] = assignments[assgnId]
    })
  }


  return {
    courseId,
    assignmentObj
  }
}

export default connect(mapStateToProps)(AssignmentSection)
