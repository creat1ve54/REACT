import React from 'react'
import './ActiveName.css'
import Teg from './Teg'
import uuid from 'react-uuid';


const ActiveName = (props) => {
  let activeTeg = props.arrayWithoutDuplicatesCategory.map(p => <Teg key={uuid()} name={p} onClickClose={props.onClickClose}/>)
  return (
    <div className='ActiveName'>
      {activeTeg}
    </div>
  )
}

export default ActiveName