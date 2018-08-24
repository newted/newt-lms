import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
  render() {
    const { sizeClass } = this.props

    return (
      <div className={'table-container ' + sizeClass}>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Assignments</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSYS 3000</td>
              <td>Lecture Quiz 1</td>
              <td>Sept. 12</td>
              <td>Due</td>
            </tr>
            <tr>
              <td>BSYS 3000</td>
              <td>Lecture Quiz 2</td>
              <td>Sept. 19</td>
              <td>Due</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(_, { sizeClass }) {
  return {
    sizeClass
  }
}

export default connect(mapStateToProps)(Table)
