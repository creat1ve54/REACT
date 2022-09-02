import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'

const CardsContainer = (props) => {
    return (
        <>
            <Cards filteredCards={props.filteredCards} cards={props.cards} description={props.description}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cardsPage.cards,
        filteredCards: state.cardsPage.filteredCards,
        description: state.filterPage.description,
    }
}

export default connect(mapStateToProps, {} )(CardsContainer)
