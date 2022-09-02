import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header__body container'>
                <div className='header__image'>
                    <img src={logo} alt="Logo" className='header__logo' />
                </div>
                <ul className='header__list'>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/catalog'>
                            Каталог
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/delivery'>
                            Доставка и оплата
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/about'>
                            О нас
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/contact'>
                            Контакты
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/faq'>
                            FAQ
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to='/search'>
                            Поиск
                        </NavLink>
                    </li>
                </ul>
                <div className='header__address address'>
                    <a className='address__link' href="mailto:zakaz@loverflower.by">zakaz@loverflower.by</a>
                    <span className='address__text'>Доставка 24/7 по договоренности с оператором</span>
                </div>
            </div>
        </>
    )
}

export default Header