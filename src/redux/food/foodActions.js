import { LIST_ALL_FOODS_SUCCESS, LIST_FOODS_FAILURE } from './foodType'
import axios from 'axios';
import { DEFAULT_API_URI } from '../../const'
import { filterAll } from '../filter/filterActions'

export const listAllFoodsSuccess = (foods) => {
    return {
        type: LIST_ALL_FOODS_SUCCESS,
        foodsList: foods
    }
}


export const listFoodsFailure = (error) => {
    return {
        type: LIST_FOODS_FAILURE,
        foodsList: error
    }
}

export const listFoodsByCategory = (filter) => {
    return {
        type: 'LIST_FOODS_BY_CATEGORY',
        foodsList: filter
    }
}

export const listAllFoods = () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    return (dispatch) => {
        axios.get(`${cors}${DEFAULT_API_URI}foods`)
            .then((response) => {
                const foods = response.data.map(food => (
                    {
                        FoodID: food._id,
                        FoodName: food.foodName,
                        CategoryName: food.categoryName,
                        Price: food.price,
                        Options: food.options
                    }
                ));
                dispatch(listAllFoodsSuccess(foods));
                dispatch(filterAll(foods));
            })
            .catch((error) => {
                dispatch(listFoodsFailure(error.message))
            })
    }
}