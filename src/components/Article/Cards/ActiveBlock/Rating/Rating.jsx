import React from 'react'
import './Rating.css'

const Rating = () => {
  return (
    <div className='Rating'>
        <ul className='Rating__list'>
            <li className='Rating__item'>по популярности</li>
            {/* <li className='Rating__item'>сначала дорогие</li> */}
            {/* <li className='Rating__item'>сначала дешевые</li> */}
        </ul>
    </div>
  )
}

export default Rating