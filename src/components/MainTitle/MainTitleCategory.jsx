import React from 'react'
import './MainTitleCategory.css'

const MainTitleCategory = (props) => {
  return (
    <button onClick={props.onMainFilter} className='mainTitle__item' name={props.name}>{props.name}</button>
  )
}

export default MainTitleCategory