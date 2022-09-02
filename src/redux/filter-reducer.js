const MAIN_CATEGORY_FILTER_ACTIVE = 'MAIN_CATEGORY_FILTER_ACTIVE';
const IS_CHECKED_BTN = 'IS_CHECKED_BTN';
const IS_CHECKED = 'IS_CHECKED';
const FILTER_COPY = 'FILTER_COPY';
const FILTER_CATEGORY = 'FILTER_CATEGORY';
const FILTER_LiGHT = 'FILTER_LiGHT';
const FILTER_COLOR = 'FILTER_COLOR';
const FILTER_FORMAT = 'FILTER_FORMAT';
const FILTER_FLOWERS = 'FILTER_FLOWERS';
const DESCRIPTION = 'DESCRIPTION';
const MIN_FILTER = 'MIN_FILTER';


let initialState = {
    mainCategoryElement: [
        { id: 1, name: 'букеты из гипосфил', },
        { id: 2, name: 'букеты из ромашек', },
        { id: 3, name: 'букеты из хризантем', },
        { id: 4, name: 'комнатные цветы в горшках', },
        { id: 5, name: 'монобукеты', },
        { id: 6, name: 'сборные букеты', },
        { id: 7, name: 'букет на праздник', },
        { id: 8, name: 'композиции из цветов', },
        { id: 9, name: 'конверты', },
        { id: 10, name: 'открытки', },
        { id: 11, name: 'подарки', },
        { id: 12, name: 'букеты из сухоцветов', },
        { id: 13, name: 'шары', },
        { id: 14, name: 'популярное', },
        { id: 15, name: 'букеты роз', },
        { id: 16, name: 'цветы на похороны', },
        { id: 17, name: 'упаковка подарков', },
    ],
    filter: [
        { id: 1, categoryName: 'light', name: 'нежные', isChecked: false },
        { id: 2, categoryName: 'light', name: 'яркие', isChecked: false },
        { id: 3, categoryName: 'color', name: 'яркий', isChecked: false },
        { id: 4, categoryName: 'color', name: 'белый', isChecked: false },
        { id: 5, categoryName: 'color', name: 'желтый', isChecked: false },
        { id: 6, categoryName: 'color', name: 'зеленый', isChecked: false },
        { id: 7, categoryName: 'color', name: 'красный', isChecked: false },
        { id: 8, categoryName: 'color', name: 'оранжевый', isChecked: false },
        { id: 9, categoryName: 'color', name: 'розовый', isChecked: false },
        { id: 10, categoryName: 'color', name: 'синий', isChecked: false },
        { id: 11, categoryName: 'format', name: 'букет', isChecked: false },
        { id: 12, categoryName: 'format', name: 'в вазе', isChecked: false },
        { id: 13, categoryName: 'format', name: 'в конверте', isChecked: false },
        { id: 14, categoryName: 'format', name: 'в корзине', isChecked: false },
        { id: 15, categoryName: 'format', name: 'в шляпочной коробке', isChecked: false },
        { id: 16, categoryName: 'format', name: 'в ящике', isChecked: false },
        { id: 17, categoryName: 'flowers', name: 'альстромерия', isChecked: false },
        { id: 18, categoryName: 'flowers', name: 'антуриум', isChecked: false },
        { id: 19, categoryName: 'flowers', name: 'аспарагус', isChecked: false },
        { id: 20, categoryName: 'flowers', name: 'астильба', isChecked: false },
        { id: 21, categoryName: 'flowers', name: 'астранция', isChecked: false },
    ],

    minFilter: [],

    arrayWithoutDuplicatesCategory: [],
    filterCopy: [],
    category: [],
    light: [],
    color: [],
    flowers: [],
    format: [],
    checkedBtn: true,
    description: '',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAIN_CATEGORY_FILTER_ACTIVE: {
            // debugger
            return {
                ...state,
                arrayWithoutDuplicatesCategory: [...action.newArr],
            };
        }
        case IS_CHECKED_BTN: {
            return {
                ...state,
                checkedBtn: action.checkedBtn,
            };
        }
        case IS_CHECKED: {
            return {
                ...state,
                filter: [...action.filter]
            };
        }
        case FILTER_COPY: {
            // debugger
            return {
                ...state,
                filterCopy: [...action.filterCopy]
            };
        }
        case FILTER_CATEGORY: {
            // debugger
            return {
                ...state,
                category: [...action.category]
            };
        }
        case FILTER_LiGHT: {
            // debugger
            return {
                ...state,
                light: [...action.light]
            };
        }
        case FILTER_COLOR: {
            // debugger
            return {
                ...state,
                color: [...action.color]
            };
        }
        case FILTER_FORMAT: {
            // debugger
            return {
                ...state,
                format: [...action.format]
            };
        }
        case FILTER_FLOWERS: {
            // debugger
            return {
                ...state,
                flowers: [...action.flowers]
            };
        }
        case DESCRIPTION: {
            // debugger
            return {
                ...state,
                description: action.description
            };
        }
        case MIN_FILTER: {
            return {
                ...state,
                minFilter: [...action.minFilter]
            };
        }

        default: {
            return state;
        }
    }
}


export const mainCategoryFilter = (newArr) => {
    // debugger
    return {
        type: MAIN_CATEGORY_FILTER_ACTIVE,
        newArr: newArr,
    }
}
export const isCheckedBtnFilter = (checkedBtn) => {
    // debugger
    return {
        type: IS_CHECKED_BTN,
        checkedBtn: checkedBtn,
    }
}
export const isCheckedFilter = (filter) => {
    // debugger
    return {
        type: IS_CHECKED,
        filter: filter
    }
}
export const filterCopyFilter = (filterCopy) => {
    // debugger
    return {
        type: FILTER_COPY,
        filterCopy: filterCopy
    }
}

export const addCategoryFilter = (category) => {
    // debugger
    return {
        type: FILTER_CATEGORY,
        category,
    }
}

export const addLightFilter = (light) => {
    // debugger
    return {
        type: FILTER_LiGHT,
        light,
    }
}

export const addColorFilter = (color) => {
    // debugger
    return {
        type: FILTER_COLOR,
        color,
    }
}

export const addFormatFilter = (format) => {
    // debugger
    return {
        type: FILTER_FORMAT,
        format,
    }
}

export const addFlowersFilter = (flowers) => {
    // debugger
    return {
        type: FILTER_FLOWERS,
        flowers,
    }
}
export const addDescription = (description) => {
    // debugger
    return {
        type: DESCRIPTION,
        description,
    }
}

export const addMinFilter = (minFilter) => {
    return {
        type: MIN_FILTER,
        minFilter,
    }
}


export default filterReducer;