import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
  render() {
    const { sizeClass, fields, data } = this.props
    // console.log(data)

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
            { data.map((object) => (
              <tr key={ object['assignmentId']}>
                { Object.keys(fields).map((header) => {
                  const key = fields[header]

                  return (
                    <td key={ object['assignmentId'] + key }>{ object[key] }</td>
                  )
                })}
              </tr>
            ))}
            {/* <tr>

            </tr>
            <tr>
              <td>BSYS 3000</td>
              <td>Lecture Quiz 2</td>
              <td>Sept. 19</td>
              <td>Due</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(_, { sizeClass, fields, data }) {
  return {
    sizeClass,
    fields,
    data
  }
}

export default connect(mapStateToProps)(Table)
