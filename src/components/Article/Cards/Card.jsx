import './Card.css'


const Card = (props) => {
  return (
    <div className='Card'>
      <img className='Card__image' src={props.img} alt="IMG" />
      <h2 className='Card__title'>{props.title}</h2>
      <div className='Card__price price'>
        <div className='price__now'>{props.price}</div>
        {props.sale && <div className='price__sale'>{props.priceSale}</div>}
      </div>
      <div className='Card__btn'>
        <button>В корзину</button>
      </div>
    </div>
  )
}

export default Card