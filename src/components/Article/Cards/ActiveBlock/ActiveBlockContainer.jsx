import React from 'react'
import { connect } from 'react-redux'
import { filteredCardsFilter } from '../../../../redux/cards-reducer';
import { mainCategoryFilter } from '../../../../redux/filter-reducer';
import ActiveBlock from './ActiveBlock'


const ActiveBlockContainer = (props) => {
    let newArrCategory = []
    const onClickClose = (e) => {
        const elements = document.querySelectorAll('.mainTitle__item--active')
        let filterCopy = props.filterCopy;
        let filteredCards = props.filteredCards
        let name = e.target.name;
        let arrayWithoutDuplicatesCategory = props.arrayWithoutDuplicatesCategory;
        newArrCategory = arrayWithoutDuplicatesCategory.filter(el => el !== name)
        elements.forEach(element => {
            if (name === element.name) {
                element.classList.remove('mainTitle__item--active');
            }
        });
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
            let newArrCards = filteredCards.filter(el => el.category !== name)
            props.filteredCardsFilter(newArrCards);
        }
        
        props.mainCategoryFilter(newArrCategory);
    }

    return (
        <>
            <ActiveBlock arrayWithoutDuplicatesCategory={props.arrayWithoutDuplicatesCategory} onClickClose={onClickClose} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        arrayWithoutDuplicatesCategory: state.filterPage.arrayWithoutDuplicatesCategory,
        filterCopy: state.filterPage.filterCopy,


        filteredCards: state.cardsPage.filteredCards,
    }
}



export default connect(mapStateToProps, { mainCategoryFilter, filteredCardsFilter })(ActiveBlockContainer)