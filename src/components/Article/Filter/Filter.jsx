import React from 'react'
import './Filter.css'
import FilterItem from './FilterItem'

const Filter = (props) => {
  let lightFilter = props.filter.filter(el => el.categoryName === 'light').map(f => <FilterItem key={f.id} categoryName={f.name} isChecked={f.isChecked} filteredCards={props.filteredCards} cards={props.cards} filteredCardsFilter={props.filteredCardsFilter} checkedBtn={props.checkedBtn} onChangeInput={props.onChangeInput} />)
  let colorFilter = props.filter.filter(el => el.categoryName === 'color').map(f => <FilterItem key={f.id} categoryName={f.name} isChecked={f.isChecked} filteredCards={props.filteredCards} cards={props.cards} filteredCardsFilter={props.filteredCardsFilter} checkedBtn={props.checkedBtn} onChangeInput={props.onChangeInput} />)
  let formatFilter = props.filter.filter(el => el.categoryName === 'format').map(f => <FilterItem key={f.id} categoryName={f.name} isChecked={f.isChecked} filteredCards={props.filteredCards} cards={props.cards} filteredCardsFilter={props.filteredCardsFilter} checkedBtn={props.checkedBtn} onChangeInput={props.onChangeInput} />)
  let flowersFilter = props.filter.filter(el => el.categoryName === 'flowers').map(f => <FilterItem key={f.id} categoryName={f.name} isChecked={f.isChecked} filteredCards={props.filteredCards} cards={props.cards} filteredCardsFilter={props.filteredCardsFilter} checkedBtn={props.checkedBtn} onChangeInput={props.onChangeInput} />)

  return (
    <div className='Filter'>
      <ul className='Filter__items'>
        <h2 className='Filter__title'>По свету</h2>
        {lightFilter}
      </ul>
      <ul className='Filter__items'>
        <h2 className='Filter__title'>По цвету</h2>
        {colorFilter}
      </ul>
      <ul className='Filter__items'>
        <h2 className='Filter__title'>По формату</h2>
        {formatFilter}
      </ul>
      <ul className='Filter__items'>
        <h2 className='Filter__title'>стоимость</h2>
      </ul>
      <ul className='Filter__items'>
        <h2 className='Filter__title'>по цветку</h2>
        {flowersFilter}
      </ul>
      <div className='Filter__btn'>
        <button onClick={props.onClickButton}>Сбросить фильтр</button>
      </div>
    </div>
  )
}

export default Filter