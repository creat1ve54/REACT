import React from 'react'
import { connect } from 'react-redux'
import { filteredCardsFilter } from '../../redux/cards-reducer'
import { addMinFilter, mainCategoryFilter } from '../../redux/filter-reducer'
import MainTitle from './MainTitle'


const MainTitleContainer = (props) => {
    const onMainFilter = (e) => {
        let arrayWithoutDuplicatesCategory = props.mainCategory.arrayWithoutDuplicatesCategory;
        let filteredCards = props.filteredCards;
        let cards = props.cards;
        let filterCopy = props.filterCopy;
        let name = e.currentTarget.name;
        if (e.target.classList.toggle('mainTitle__item--active')) {
            arrayWithoutDuplicatesCategory.push(name)
            cards.forEach(el => {
                if (el.category === name) {
                    filteredCards.push(el)
                }
            });
            let filterCardsUnique = [...new Set(filteredCards)];
            props.filteredCardsFilter(filterCardsUnique);
            props.mainCategoryFilter(arrayWithoutDuplicatesCategory);
        } else {
            let newArr = [];
            if (filterCopy.length !== 0) {
                filteredCards.forEach(el => {
                    let count = 0;
                    filterCopy.forEach(element => {
                        if (el.light === element.name && element.isChecked === true) {
                            count++
                        } else if (el.color === element.name && element.isChecked === true) {
                            count++
                        } else if (el.format === element.name && element.isChecked === true) {
                            count++
                        } else if (el.flowers === element.name && element.isChecked === true) {
                            count++
                        } else if (el.category === element.name && element.isChecked === true) {
                            count++
                        }
                    })
                    if (count > 0) {
                        newArr.push(el)
                    }
                })
                props.filteredCardsFilter(newArr);
            } else {

                let newArr = filteredCards.filter(el => el.category !== name)

                props.filteredCardsFilter(newArr);
            }

            let newArrCategory = arrayWithoutDuplicatesCategory.filter(el => el !== name)
            props.mainCategoryFilter(newArrCategory);

        }
    }

    return (
        <>
            <MainTitle mainCategory={props.mainCategory} onMainFilter={onMainFilter} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mainCategory: state.filterPage,
        filterCopy: state.filterPage.filterCopy,
        minFilter: state.filterPage.minFilter,

        filteredCards: state.cardsPage.filteredCards,
        cards: state.cardsPage.cards,
    }
}


export default connect(mapStateToProps, { mainCategoryFilter, filteredCardsFilter, addMinFilter })(MainTitleContainer)