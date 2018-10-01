import React from 'react'

const NoInfo = ({ title, sizeClass }) => (
  <div className={ sizeClass }>
    <div className='panel'>
      <div className='panel-body no-info'>
        You don't have any { title.toLowerCase() }
      </div>
    </div>
  </div>
)

export default NoInfo
