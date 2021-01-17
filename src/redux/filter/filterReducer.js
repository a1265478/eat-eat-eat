import { FILTER_ALL, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from './filterType'

const initialState = {
    currentFilter: '',
    foodsList: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_ALL:
            return {
                ...state,
                currentFilter: action.currentFilter,
                foodsList: action.foodsList
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                currentFilter: action.currentFilter,
                foodsList: action.foodsList
            }
        case FILTER_BY_SEARCH:
            return {
                ...state,
                foodsList: action.foodsList
            }
        default:
            return state;
    }
}