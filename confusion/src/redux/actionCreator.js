import * as ActionTypes from './actionTypes'

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