import * as ActionTypes from './actionTypes'
import DISHES from '../shared/dishes';
import LEADERS from '../shared/leaders';
import PROMOTIONS from '../shared/promotions';
import COMMENTS from '../shared/comments';
import baseUrl from '../shared/baseUrl'
import axios from 'axios';


export const addComment = (dishId, rating, comment, author) => {
	return {
		type: ActionTypes.Add_Comments,
		payload: {
			dishId: dishId,
			rating: rating,
			comment: comment,
			author: author
		}
	}
}

export const dishesLoading = () => {
	return {
		type: ActionTypes.Dishes_Loading,
	}

}

export const addDishes = (dishes) => {
	return {
		type: ActionTypes.Add_Dishes,
		payload: {
			dishes: dishes
		}
	}
}

export const dishesFailed = (err) => {
	return {
		type: ActionTypes.Dishes_Failed,
		payload: {
			err: err
		}
	}
}

export const fetchDishes = () => (dispatch) => {

	dispatch(dishesLoading);
	axios.get(baseUrl + "dishes")
		.then(res=> {
			dispatch(addDishes(res.data));	
		})

}


export const commentsLoading = () => {
	return {
		type: ActionTypes.Comments_Loading,
	}

}

export const addComments = (comments) => {
	return {
		type: ActionTypes.Add_Comments,
		payload: {
			comments: comments
		}
	}
}

export const commentsFailed = (err) => {
	return {
		type: ActionTypes.Comments_Failed,
		payload: {
			err: err
		}
	}
}

export const fetchComments = () => (dispatch) => {

	dispatch(commentsLoading);

	axios.get(baseUrl + "comments")
		.then(res=> {
			dispatch(addComments(res.data));	
		})


}




export const promotionsLoading = () => {
	return {
		type: ActionTypes.Promotions_Loading,
	}
}

export const addPromotions = (promotions) => {
	return {
		type: ActionTypes.Add_Promotions,
		payload: {
			promotions:promotions
		}
	}
}

export const promotionsFailed = (err) => {
	return {
		type: ActionTypes.Promotions_Failed,
		payload: {
			err: err
		}
	}
}

export const fetchPromotions = () => (dispatch) => {

	dispatch(promotionsLoading);
	
	axios.get(baseUrl + "promotions")
		.then(res=> {
			dispatch(addPromotions(res.data));	
		})


}



export const leadersLoading = () => {
	return {
		type: ActionTypes.Leaders_Loading,
	}

}

export const addLeaders = (leaders) => {
	return {
		type: ActionTypes.Add_Leaders,
		payload: {
			leaders:leaders
		}
	}
}

export const leadersFailed = (err) => {
	return {
		type: ActionTypes.Leaders_Failed,
		payload: {
			err: err
		}
	}
}

export const fetchLeaders = () => (dispatch) => {

	dispatch(leadersLoading);
	
	axios.get(baseUrl + "leaders")
		.then(res=> {
			dispatch(addLeaders(res.data));	
		})


}