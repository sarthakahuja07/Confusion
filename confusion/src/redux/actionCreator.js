import * as ActionTypes from './actionTypes'
import DISHES from '../shared/dishes';

export const addComment= (dishId,rating,comment,author)=>{
    return{
        type:ActionTypes.Add_Comment,
        payload:{
            dishId : dishId,
            rating: rating,
            comment:comment,
            author:author
        }
    }
}

export const dishesLoading=()=>{
    return {
        type:ActionTypes.Dishes_Loading,
    }
    
}

export const addDishes=(dishes)=>{
    return {
        type:ActionTypes.Add_Dishes,
        payload: {
            dishes:dishes
        }
    }
}

export const dishesFailed=(err)=>{
    return {
        type:ActionTypes.Dishes_Failed,
        payload: {
            err:err
        }
    }   
}

export const fetchDishes=()=>(dispatch)=>{
    
    dispatch(dishesLoading);

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}