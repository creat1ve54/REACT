import flower1 from '../image/article/flower-1.jpg'
import flower2 from '../image/article/flower-2.jpg'
import flower3 from '../image/article/flower-3.jpg'
import flower4 from '../image/article/flower-4.jpg'
import flower5 from '../image/article/flower-5.jpg'
import flower6 from '../image/article/flower-6.jpg'
import flower7 from '../image/article/flower-7.jpg'
import flower8 from '../image/article/flower-8.jpg'
import flower9 from '../image/article/flower-9.jpg'
import flower10 from '../image/article/flower-10.jpg'
import flower11 from '../image/article/flower-11.jpg'
import flower12 from '../image/article/flower-12.jpg'


const FILTERERS_CARDS = 'FILTERERS_CARDS'

let initialState = {
    cards: [
        { id: 1, img: flower1, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'нежные', color: 'яркий', format: 'букет', flowers: 'альстромерия', category: 'букеты из гипосфил' },
        { id: 2, img: flower2, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'яркие', color: 'белый', format: 'в вазе', flowers: 'антуриум', category: 'букеты из ромашек' },
        { id: 3, img: flower3, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'нежные', color: 'желтый', format: 'в конверте', flowers: 'аспарагус', category: 'букеты из хризантем' },
        { id: 4, img: flower4, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: true, light: 'яркие', color: 'зеленый', format: 'в корзине', flowers: 'астильба', category: 'комнатныее цветы в горшках' },
        { id: 5, img: flower5, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'нежные', color: 'крансый', format: 'в шляпочной коробке', flowers: 'астранция', category: 'монобукеты' },
        { id: 6, img: flower6, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: true, light: 'яркие', color: 'оранжевый', format: ' в ящике', flowers: 'альстромерия', category: 'сборные букеты' },
        { id: 7, img: flower7, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'нежные', color: 'розовый', format: 'букет', flowers: 'антуриум', category: 'букеты из гипосфил' },
        { id: 8, img: flower8, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'яркие', color: 'синий', format: 'в вазе', flowers: 'аспарагус', category: 'букеты из ромашек' },
        { id: 9, img: flower9, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: true, light: 'нежные', color: 'яркий', format: 'в конверте', flowers: 'астильба', category: 'монобукеты' },
        { id: 10, img: flower10, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'яркие', color: 'белый', format: 'в корзине', flowers: 'астранция', category: 'монобукеты' },
        { id: 11, img: flower11, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: true, light: 'нежные', color: 'желтый', format: 'в шляпочной коробке', flowers: 'альстромерия', category: 'монобукеты' },
        { id: 12, img: flower12, title: 'лучший день', price: '16.700 ₽', priceSale: '18.700 ₽', sale: false, light: 'яркие', color: 'зеленый', format: 'в ящике', flowers: 'антуриум', category: 'букеты из ромашек' },
    ],
    filteredCards: []
}


const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERERS_CARDS: {
            return {
                ...state,
                filteredCards: [...action.filteredCards],
            }
        }
        default:
            return state;
    }
}


export const filteredCardsFilter = (filteredCards) => {
    return {
        type: FILTERERS_CARDS,
        filteredCards: filteredCards,
    }
}

export default cardsReducer;