import * as ActionTypes from './actionTypes'

export const DishesReducer = (state = {
	isLoading: true,
	err: null,
	dishes: []
}, action) => {

	switch (action.type) {
		case ActionTypes.Dishes_Loading:
			{
				return {
					isLoading: true,
					err: null,
					dishes: []
				}

			}
		case ActionTypes.Add_Dishes:
			{
				console.log(action.payload.dishes);
				return {
					isLoading: false,
					err: null,
					dishes: action.payload.dishes
				}

			}
		case ActionTypes.Dishes_Failed:
			{
				return {
					isLoading: false,
					err: action.payload.err,
					dishes: []
				}
			}
		default:
			return state;
	}
}