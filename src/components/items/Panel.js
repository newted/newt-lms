import React, { Component } from 'react'
import { connect } from 'react-redux'

class Panel extends Component {
  render() {
    const { title, sizeClass } = this.props
    
    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <div className='panel'>
          <div className='panel-body'>
            Hello there
          </div>
          <div className='panel-body'>
            This is the second one
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ courses }, { title, sizeClass }) {
  return {
    title,
    sizeClass
  }
}

export default connect(mapStateToProps)(Panel)
