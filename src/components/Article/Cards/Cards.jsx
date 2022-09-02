import ActiveBlockContainer from "./ActiveBlock/ActiveBlockContainer"
import Card from "./Card"
import './Cards.css'
import uuid from 'react-uuid';


const Cards = ({ cards, filteredCards, description }) => {
  if (filteredCards.length === 0 && description === '') {
    filteredCards = cards;
  }
  let cardsElement = filteredCards.map(p => <Card key={uuid()} img={p.img} title={p.title} price={p.price} priceSale={p.priceSale} sale={p.sale} />)
  let descriptionContainer = <div className='Cards__description'>{description}</div>
  // debugger
  return (
    <div className='Cards'>
      <ActiveBlockContainer />
      <div className='Cards__body'>
        {description === '' ? cardsElement : descriptionContainer}
      </div>
    </div>
  )
}

export default Cards