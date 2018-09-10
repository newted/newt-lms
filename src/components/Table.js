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
    const { sizeClass, fields, data, title } = this.props

    let tableStyle = {}
    if (sizeClass === 'item-container--sm') {
      tableStyle = {
        fontSize: '.9rem'
      }
    }

    return (
      <div className={ sizeClass } style={{ minWidth: '325px' }}>
        { title && (
          <h3 className='header--3'>{ title }</h3>
        )}
        <div className='table-container'>
          <table style={ tableStyle }>
            <thead>
              <tr>
                { Object.keys(fields).map((header) => (
                  <th key={ header }>{ header }</th>
                ))}
              </tr>
            </thead>
            <tbody>
              { data.map((object) => (
                <tr key={ object['id']}>
                  { Object.keys(fields).map((header) => {
                    const key = fields[header]

                    if (key === 'status') {
                      return <StatusIcon
                        key={ object['id'] + key }
                        data={ object } />
                    } else {
                      return (
                        <td key={ object['id'] + key }>
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
      </div>
    )
  }
}

function mapStateToProps(_, { sizeClass, fields, data, title }) {
  return {
    sizeClass,
    fields,
    data,
    title
  }
}

export default connect(mapStateToProps)(Table)
