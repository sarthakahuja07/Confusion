import * as ActionTypes from './actionTypes'

export const LeadersReducer=(state={
    isLoading:true,
    err:null,
    leaders:[]
}, action)=>{

    switch(action.type){

        case ActionTypes.Leaders_Loading:
			{
				return {
					isLoading: true,
					err: null,
					leaders: []
				}

			}
		case ActionTypes.Add_Leaders:
			{
				return {
					isLoading: false,
					err: null,
					leaders: action.payload.leaders
				}

			}
		case ActionTypes.Leaders_Failed:
			{
				return {
					isLoading: false,
					err: action.payload.err,
					leaders: []
				}
			}

        default:
            return state;
    }
}