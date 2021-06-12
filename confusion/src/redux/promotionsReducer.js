import * as ActionTypes from './actionTypes'

export const PromotionsReducer=(state={
    isLoading:true,
    err:null,
    promotions:[]
}, action)=>{

    switch(action.type){
        case ActionTypes.Promotions_Loading:
			{
				return {
					isLoading: true,
					err: null,
					promotions: []
				}

			}
		case ActionTypes.Add_Promotions:
			{
				return {
					isLoading: false,
					err: null,
					promotions: action.payload.promotions
				}

			}
		case ActionTypes.Promotions_Failed:
			{
				return {
					isLoading: false,
					err: action.payload.err,
					promotions: []
				}
			}

        default:
            return state;
    }
}