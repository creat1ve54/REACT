import React from 'react'
import './Teg.css'

const Teg = (props) => {
    return (
        <button onClick={props.onClickClose} className='Teg' name={props.name}>
            {props.name}
        </button>
    )
}

export default Teg