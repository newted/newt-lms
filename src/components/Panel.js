import React, { Component } from 'react'
import { connect } from 'react-redux'

const NoInfo = ({ title, sizeClass }) => (
  <div className={ sizeClass }>
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
    const { title, sizeClass, data } = this.props

    if (data.length === 0) {
      return <NoInfo title={ title } sizeClass={ sizeClass }/>
    }

    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <div className='panel'>
          { data.map((infoObj) => (
            <div className='panel-body' key={ infoObj.id }>
              <div>
                { infoObj.name }
              </div>
              <div>
                { infoObj.details }
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(_, { title, data, sizeClass }) {

  return {
    title,
    sizeClass,
    data
  }
}

export default connect(mapStateToProps)(Panel)
