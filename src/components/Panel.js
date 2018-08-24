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
    const { title, sizeClass, infoObj } = this.props

    if (Object.keys(infoObj).length === 0) {
      return <NoInfo title={ title } sizeClass={ sizeClass }/>
    }

    return (
      <div className={ sizeClass }>
        <h3 className='header--3'>{ title }</h3>
        <div className='panel'>
          { Object.keys(infoObj).map((id) => (
            <div className='panel-body' key={ id }>
              <div>
                { infoObj[id].name }
              </div>
              <div>
                { infoObj[id].details}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(_, { title, infoObj, sizeClass }) {

  return {
    title,
    sizeClass,
    infoObj
  }
}

export default connect(mapStateToProps)(Panel)
