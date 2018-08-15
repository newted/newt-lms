import React from 'react'

export default function Panel({ title, sizeClass }) {
  return (
    <div className={ sizeClass }>
      <h3 className='header--3'>{ title }</h3>
      <div className='panel'>Hello there</div>
    </div>
  )
}
