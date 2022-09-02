import React from 'react'
import './Sidebar.css'
import inst from '../../image/social/inst.svg'
import whatsapp from '../../image/social/whatsapp.svg'
import message from '../../image/social/message.svg'
import basket from '../../image/basket.svg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__info'>
                <span className='sidebar__street'>ул. Тимирязева 67</span>
                <span className='sidebar__time'>10:00 до 21:00 без выходных</span>
            </div>
            <div className='sidebar__social social'>
                <ul className='social__list'>
                    <li className='social__item'>
                        <img src={inst} alt="Inst" />
                    </li>
                    <li className='social__item'>
                        <img src={whatsapp} alt="whatsapp" />
                    </li>
                    <li className='social__item'>
                        <img src={message} alt="message" />
                    </li>
                </ul>
            </div>
            <div className='sidebar__telephone'>
                <div className='sidebar__number'>
                    <a href="tel:375291136969">+375 (29) 113-69-69</a>
                </div>
                <div className='sidebar__call'>
                    <a href='tel:375291136969'> заказать звонок</a>
                </div>
            </div>
            <div className='sidebar__basket'>
                <img src={basket} alt="basket" />
            </div>
        </div>
    )
}

export default Sidebar