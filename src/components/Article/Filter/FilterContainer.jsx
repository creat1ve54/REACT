import React from 'react'
import { connect } from 'react-redux'
import { filteredCardsFilter } from '../../../redux/cards-reducer'
import { addCategoryFilter, addColorFilter, addDescription, addFlowersFilter, addFormatFilter, addLightFilter, filterCopyFilter, isCheckedBtnFilter, isCheckedFilter, mainCategoryFilter } from '../../../redux/filter-reducer'
import Filter from './Filter'


const FilterContainer = (props) => {
  const onClickButton = (e) => {
    let filter = props.filter;
    let description = '';
    let newArr = [];
    filter.forEach(el => {
      el.isChecked = false
    });
    props.isCheckedFilter(filter)
    props.filteredCardsFilter(newArr);
    const elements = document.querySelectorAll('.mainTitle__item--active')
    elements.forEach(element => {
      element.classList.remove('mainTitle__item--active');
    });
    props.mainCategoryFilter(newArr);
    props.addDescription(description)
  }


  const onChangeInput = (e) => {
    let categoryFilter = props.categoryFilter
    let lightFilter = props.lightFilter
    let colorFilter = props.colorFilter
    let flowersFilter = props.flowersFilter
    let formatFilter = props.formatFilter


    let description = props.description;

    let filterCopyArr;
    let filterCopy = props.filterCopy;
    let name = e.target.name;
    let filter = props.filter;
    let filteredCards = props.filteredCards;
    let cards = props.cards;
    if (e.target.checked) {


      filter.forEach(el => {
        if (el.name === name) {
          el.isChecked = true
          filterCopy.push(el)
        }
      });
      props.filterCopyFilter(filterCopy)
      cards.forEach(el => {
        if (el.light === name) {
          filteredCards.push(el)
        } else if (el.color === name) {
          filteredCards.push(el)
        } else if (el.format === name) {
          filteredCards.push(el)
        } else if (el.flowers === name) {
          filteredCards.push(el)
        }
      });
      let filterCardsUnique = [...new Set(filteredCards)];
      filterCopy.forEach(el => {
        if (el.categoryName === 'light') {
          lightFilter.push(el.name)
        } else if (el.categoryName === 'color') {
          colorFilter.push(el.name)
        } else if (el.categoryName === 'format') {
          formatFilter.push(el.name)
        } else if (el.categoryName === 'flowers') {
          flowersFilter.push(el.name)
        }
      })
      if (filterCardsUnique.length === 0) {
        description = 'Упс...С такой категорией товары отсутствуют!'
      } else {
        description = ''
      }

      let categoryFilterUnique = [...new Set(categoryFilter)];
      let lightFilterUnique = [...new Set(lightFilter)];
      let colorFilterUnique = [...new Set(colorFilter)];
      let formatFilterUnique = [...new Set(formatFilter)];
      let flowersFilterUnique = [...new Set(flowersFilter)];

      props.addCategoryFilter(categoryFilterUnique)
      props.addLightFilter(lightFilterUnique)
      props.addColorFilter(colorFilterUnique)
      props.addFormatFilter(formatFilterUnique)
      props.addFlowersFilter(flowersFilterUnique)
      props.filteredCardsFilter(filterCardsUnique);


      props.addDescription(description)
    } else {
      filter.forEach(el => {
        if (el.name === name) {
          el.isChecked = false
          filterCopyArr = filterCopy.filter(el => el.name !== name)
        }
      });
      props.filterCopyFilter(filterCopyArr)
      let newArr = [];
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
          }
        })
        if (count > 0) {
          newArr.push(el)
        }
      })
      if (filteredCards.length === 0) {
        description = ''
      }
      filterCopy.forEach(el => {
        if (el && el.isChecked === true && newArr.length === 0) {
          description = 'Упс...С такой категорией товары отсутствуют!'
        }
      })
      props.addDescription(description)
      props.filteredCardsFilter(newArr);
    }
    props.isCheckedFilter(filter)
  }
  return (
    <>
      <Filter filter={props.filter} filteredCards={props.filteredCards} cards={props.cards} filteredCardsFilter={props.filteredCardsFilter} onClickButton={onClickButton} checkedBtn={props.checkedBtn} onChangeInput={onChangeInput} arrayWithoutDuplicatesCategory={props.arrayWithoutDuplicatesCategory} minFilter={props.minFilter} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filterPage.filter,
    checkedBtn: state.filterPage.checkedBtn,
    filterCopy: state.filterPage.filterCopy,
    isChecked: state.filterPage.filter.isChecked,
    minFilter: state.filterPage.minFilter,


    categoryFilter: state.filterPage.category,
    lightFilter: state.filterPage.light,
    colorFilter: state.filterPage.color,
    flowersFilter: state.filterPage.flowers,
    formatFilter: state.filterPage.format,

    description: state.filterPage.description,

    mainCategory: state.filterPage,


    filteredCards: state.cardsPage.filteredCards,
    cards: state.cardsPage.cards,

  }
}

export default connect(mapStateToProps, { filteredCardsFilter, isCheckedFilter, isCheckedBtnFilter, mainCategoryFilter, filterCopyFilter, addCategoryFilter, addLightFilter, addColorFilter, addFormatFilter, addFlowersFilter, addDescription })(FilterContainer)