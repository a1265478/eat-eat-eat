import { FILTER_ALL, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from './filterType'

export const filterAll = (foods) => {
    return {
        type: FILTER_ALL,
        currentFilter: 'ALL',
        foodsList: foods
    }
}


export const filterByCategory = (foods, filter) => {
    return {
        type: FILTER_BY_CATEGORY,
        currentFilter: filter,
        foodsList: foods.filter(food => food.CategoryName === filter)
    }
}

export const filterBySearch = (foods, filter) => {
    return {
        type: FILTER_BY_SEARCH,
        foodsList: foods.filter(food => food.FoodName.includes(filter))
    }
}
