import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FaCircle } from 'react-icons/fa'

const StatusIcon = ({ data }) => {
  const status = data.status
  let color = ''

  if (status === 'Complete') {
    color = 'lightgreen'
  } else if (status === 'In Progress') {
    color = 'lightgrey'
  } else {
    color = 'red'
  }

  return (
    <td>
      <FaCircle color={ color }/>
    </td>
  )
}

class Table extends Component {
  render() {
   const { sizeClass, fields, data } = this.props

    return (
      <div className={'table-container ' + sizeClass}>
        <table>
          <thead>
            <tr>
              { Object.keys(fields).map((header) => (
                <th key={ header }>{ header }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { data.map((object) => (
              <tr key={ object['assignmentId']}>
                { Object.keys(fields).map((header) => {
                  const key = fields[header]

                  if (key === 'status') {
                    return <StatusIcon
                      key={ object['assignmentId'] + key }
                      data={ object } />
                  } else {
                    return (
                      <td key={ object['assignmentId'] + key }>
                        { object[key] }
                      </td>
                    )
                  }
                })}
              </tr>
            ))}
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
