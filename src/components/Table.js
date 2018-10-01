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
    const { sizeClass, type, fields, data, title, showCompleted } = this.props

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
          { Object.keys(data).length > 0
            ? <table style={ tableStyle }>
                <thead>
                  <tr>
                    { Object.keys(fields).map((header) => (
                      <th key={ header }>{ header }</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  { showCompleted
                    ? data.map((object) => mapObjectToTableRow(object, fields))
                    : data.filter((object) => object.status !== 'Complete')
                        .map((object) => mapObjectToTableRow(object, fields))
                  }
                </tbody>
              </table>
            : <div>You don't have any { type.toLowerCase() }</div>
          }          
        </div>
      </div>
    )
  }
}

// Map item info from object into table row
function mapObjectToTableRow(object, fields) {
  return (
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
  )
}

function mapStateToProps(
  _,
  { sizeClass, type, fields, data, title, showCompleted }
) {
  return {
    sizeClass,
    type,
    fields,
    data,
    title,
    showCompleted
  }
}

export default connect(mapStateToProps)(Table)
