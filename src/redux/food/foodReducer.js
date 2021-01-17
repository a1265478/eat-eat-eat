import { LIST_ALL_FOODS_SUCCESS, LIST_FOODS_FAILURE } from './foodType'

const initialState = {
    foodsList: [],
    error: ''
}

export const foodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL_FOODS_SUCCESS:
            return {
                ...state,
                foodsList: action.foodsList
            }
        case LIST_FOODS_FAILURE:
            return {
                ...state,
                foodsList: [],
                error: action.foodsList
            }
        case 'LIST_FOODS_BY_CATRGORY':
            return {
                ...state,
                foodsList: action.foodsList
            }
        default:
            return state;
    }
}