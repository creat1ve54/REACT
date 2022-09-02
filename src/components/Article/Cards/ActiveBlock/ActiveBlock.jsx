import React from 'react'
import Rating from './Rating/Rating'
import './ActiveBlock.css'
import ActiveName from './ActiveName/ActiveName'

const ActiveBlock = (props) => {
    return (
        <div className='ActiveBlock'>
            <ActiveName arrayWithoutDuplicatesCategory={props.arrayWithoutDuplicatesCategory} onClickClose={props.onClickClose}/>
            <Rating />
        </div>
    )
}

export default ActiveBlock