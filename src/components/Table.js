import React, { Component } from 'react'
import { connect } from 'react-redux'

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

                  return (
                    <td key={ object['assignmentId'] + key }>{ object[key] }</td>
                  )
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
