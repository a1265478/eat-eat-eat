import { LIST_ALL_CATEGORY_SUCCESS, LIST_CATEGORIES_FAILURE } from './categoryType'

const initialState = {
    categories: [],
    error: ''
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                categories: [],
                error: action.payload
            }
        default:
            return state;
    }
}