import React from 'react'
import './Filter.css'

const FilterItem = (props) => {
    return (
        <>
            <li className='Filter__item'>
                <input onChange={props.onChangeInput} checked={props.isChecked} type='checkbox' name={props.categoryName} />
                <span className='Filter__text'> {props.categoryName}</span>
            </li>
        </>
    )
}

export default FilterItem