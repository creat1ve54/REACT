import React from 'react'
import MainTitleCategory from './MainTitleCategory'
import './MainTitle.css'

const MainTitle = (props) => {
    
    let categoryElement = props.mainCategory.mainCategoryElement.map(p => <MainTitleCategory key={p.id} name={p.name} onMainFilter={props.onMainFilter}/>)
    return (
        <div className='mainTitle'>
            <h1 className='mainTitle__pages'>
                <span className='mainTitle__page'>Главная</span>
                <span className='mainTitle__page mainTitle__page--modification'>Каталог</span>
            </h1>
            <div className='mainTitle__case'>
                <div className='mainTitle__title'>
                    каталог
                    <div className='mainTitle__title--modification'>
                        букетов
                        <div className='mainTitle__description'>В нашем магазине самый большой выбор букетов для любых событий:</div>
                    </div>
                </div>
                <ul className='mainTitle__list'>
                    {categoryElement}
                </ul>
            </div>
        </div>
    )
}

export default MainTitle