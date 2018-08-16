import React from 'react'

export default function Panel({ title, sizeClass, info }) {
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
